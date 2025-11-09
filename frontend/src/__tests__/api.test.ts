let getConcerts: typeof import('@/lib/api').getConcerts;
let getReservationHistory: typeof import('@/lib/api').getReservationHistory;
let createConcert: typeof import('@/lib/api').createConcert;
let reserveConcert: typeof import('@/lib/api').reserveConcert;
let cancelReservation: typeof import('@/lib/api').cancelReservation;
let ensureDemoUser: typeof import('@/lib/api').ensureDemoUser;

describe('api client', () => {
  beforeEach(async () => {
    jest.resetModules();
    delete process.env.NEXT_PUBLIC_API_BASE_URL;
    delete process.env.NEXT_PUBLIC_DEMO_USER_EMAIL;
    delete process.env.NEXT_PUBLIC_DEMO_USER_NAME;
    global.fetch = jest.fn();

    const api = await import('@/lib/api');
    getConcerts = api.getConcerts;
    getReservationHistory = api.getReservationHistory;
    createConcert = api.createConcert;
    reserveConcert = api.reserveConcert;
    cancelReservation = api.cancelReservation;
    ensureDemoUser = api.ensureDemoUser;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockResponse = <T>(data: T, init?: Partial<Response>) =>
    Promise.resolve({
      ok: true,
      status: init?.status ?? 200,
      json: () => Promise.resolve(data),
      statusText: init?.statusText ?? 'OK',
    } as unknown as Response);

  it('builds concert URL with query params', async () => {
    (global.fetch as jest.Mock).mockImplementation(() =>
      mockResponse([
        { id: '1' },
      ]),
    );

    await getConcerts({ userId: 'user-1' });

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:4000/concerts?userId=user-1',
      expect.objectContaining({
        headers: expect.objectContaining({ 'Content-Type': 'application/json' }),
      }),
    );
  });

  it('propagates backend errors', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 400,
      statusText: 'Bad Request',
      json: () => Promise.resolve({ message: 'Invalid' }),
    } as Response);

    await expect(getReservationHistory()).rejects.toThrow('Invalid');
  });

  it('throws descriptive error when backend unreachable', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('network'));

    await expect(getUsers()).rejects.toThrow('http://localhost:4000');
  });

  it('sends POST bodies for mutations', async () => {
    (global.fetch as jest.Mock).mockImplementation(mockResponse.bind(null, { success: true }));

    await createConcert({ name: 'Concert', description: 'Desc', totalSeats: 50 });
    await reserveConcert({ userId: 'user-1', concertId: 'concert-1' });
    await cancelReservation({ userId: 'user-1', concertId: 'concert-1' });

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:4000/concerts',
      expect.objectContaining({ method: 'POST' }),
    );
    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:4000/reservations',
      expect.objectContaining({ method: 'POST' }),
    );
    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:4000/reservations/cancel',
      expect.objectContaining({ method: 'POST' }),
    );
  });

  it('ensures demo user exists', async () => {
    process.env.NEXT_PUBLIC_DEMO_USER_EMAIL = 'demo@example.com';
    process.env.NEXT_PUBLIC_DEMO_USER_NAME = 'Demo';
    jest.resetModules();
    const api = await import('@/lib/api');
    ensureDemoUser = api.ensureDemoUser;

    (global.fetch as jest.Mock)
      .mockImplementationOnce(() => mockResponse([{ id: '1', email: 'demo@example.com', fullName: 'Demo', role: 'USER' }]))
      .mockImplementationOnce(() => mockResponse([]))
      .mockImplementationOnce(() =>
        mockResponse({ id: '1', email: 'demo@example.com', fullName: 'Demo', role: 'USER' }),
      );

    const first = await ensureDemoUser();
    expect(first).toEqual({ id: '1', email: 'demo@example.com', fullName: 'Demo', role: 'USER' });

    const second = await ensureDemoUser();
    expect(second).toEqual({ id: '1', email: 'demo@example.com', fullName: 'Demo', role: 'USER' });

    expect(global.fetch).toHaveBeenLastCalledWith(
      'http://localhost:4000/users',
      expect.objectContaining({ method: 'POST' }),
    );
  });
});
