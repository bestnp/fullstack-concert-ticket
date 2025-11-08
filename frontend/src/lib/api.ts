const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';

type RequestOptions = RequestInit & {
  json?: unknown;
};

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { json, headers, ...rest } = options;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(headers ?? {}),
    },
    body: json !== undefined ? JSON.stringify(json) : rest.body,
  });

  if (!response.ok) {
    let message = response.statusText;
    try {
      const errorBody = await response.json();
      message = errorBody.message ?? message;
    } catch {
      // ignore JSON parse errors
    }

    throw new Error(message);
  }

  if (response.status === 204) {
    // @ts-expect-error – allow void return
    return undefined;
  }

  return response.json() as Promise<T>;
}

export type ConcertResponse = {
  id: string;
  name: string;
  description: string;
  totalSeats: number;
  reservedSeats: number;
  availableSeats: number;
  startDateTime: string | null;
  createdAt: string;
  updatedAt: string;
  reservedByUser?: boolean;
};

export type ReservationHistoryEntry = {
  id: string;
  reservationId: string | null;
  userId: string;
  concertId: string;
  action: 'RESERVE' | 'CANCEL';
  occurredAt: string;
  snapshotSeats: number;
  note: string | null;
  concert?: {
    id: string;
    name: string;
  };
  user?: {
    id: string;
    fullName: string;
    email?: string;
  };
};

export type UserResponse = {
  id: string;
  email: string;
  fullName: string;
  role: 'ADMIN' | 'USER';
  createdAt: string;
  updatedAt: string;
};

export async function getConcerts(params?: { userId?: string }) {
  const searchParams = new URLSearchParams();
  if (params?.userId) {
    searchParams.set('userId', params.userId);
  }

  const query = searchParams.toString();
  const path = `/concerts${query ? `?${query}` : ''}`;
  return request<ConcertResponse[]>(path);
}

export async function createConcert(input: {
  name: string;
  description: string;
  totalSeats: number;
}) {
  return request<ConcertResponse>('/concerts', {
    method: 'POST',
    json: input,
  });
}

export async function deleteConcert(concertId: string) {
  return request<{ message: string }>(`/concerts/${concertId}`, {
    method: 'DELETE',
  });
}

export async function reserveConcert(input: {
  userId: string;
  concertId: string;
  note?: string;
}) {
  return request('/reservations', {
    method: 'POST',
    json: input,
  });
}

export async function cancelReservation(input: {
  userId: string;
  concertId: string;
  note?: string;
}) {
  return request('/reservations/cancel', {
    method: 'POST',
    json: input,
  });
}

export async function getReservationHistory(userId?: string) {
  const path = userId
    ? `/reservations/history?userId=${encodeURIComponent(userId)}`
    : '/reservations/history';
  return request<ReservationHistoryEntry[]>(path);
}

export async function getUsers() {
  return request<UserResponse[]>('/users');
}

export async function createUser(input: {
  email: string;
  fullName: string;
  role?: 'ADMIN' | 'USER';
}) {
  return request<UserResponse>('/users', {
    method: 'POST',
    json: input,
  });
}

const DEMO_USER_EMAIL =
  process.env.NEXT_PUBLIC_DEMO_USER_EMAIL ?? 'sara.john@example.com';
const DEMO_USER_NAME =
  process.env.NEXT_PUBLIC_DEMO_USER_NAME ?? 'Sara John';

export async function ensureDemoUser() {
  const users = await getUsers();
  const existing = users.find((user) => user.email === DEMO_USER_EMAIL);
  if (existing) {
    return existing;
  }

  return createUser({
    email: DEMO_USER_EMAIL,
    fullName: DEMO_USER_NAME,
    role: 'USER',
  });
}

