'use client';

import { useState } from 'react';

import { Button, Sidebar, Toast, type ToastVariant } from '@/components';
import { UserIcon } from '@/icons';

type UserConcert = {
  id: string;
  name: string;
  description: string;
  totalSeats: number;
  availableSeats: number;
  reserved: boolean;
};

type ReservationHistory = {
  id: string;
  dateTime: string;
  concertName: string;
  action: 'Reserve' | 'Cancel';
};

const USER_CONCERTS: UserConcert[] = [
  {
    id: 'user-concert-1',
    name: 'Concert Name',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non. Fusce dignissim turpis sed non est orci sed in. Blandit ut purus nunc sed donec commodo morbi diam scelerisque.',
    totalSeats: 500,
    availableSeats: 0,
    reserved: false,
  },
  {
    id: 'user-concert-2',
    name: 'Concert Name',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non. Fusce dignissim turpis sed non est orci sed in. Blandit ut purus nunc sed donec commodo morbi diam scelerisque.',
    totalSeats: 2000,
    availableSeats: 150,
    reserved: true,
  },
];

export default function UserPage() {
  const [concerts, setConcerts] = useState(USER_CONCERTS);
  const [history, setHistory] = useState<ReservationHistory[]>([]);
  const [toast, setToast] = useState<{ message: string; variant: ToastVariant } | null>(null);

  const showToast = (message: string, variant: ToastVariant = 'success') => {
    setToast({ message, variant });
  };

  const updateHistory = (concertName: string, action: 'Reserve' | 'Cancel') => {
    setHistory((prev) => [
      {
        id: `history-${Date.now()}`,
        dateTime: new Date().toLocaleString(),
        concertName,
        action,
      },
      ...prev,
    ]);
  };

  const handleReserve = (id: string) => {
    setConcerts((prev) =>
      prev.map((concert) => {
        if (concert.id !== id) return concert;
        if (concert.reserved) {
          showToast('You already reserved this concert.', 'info');
          return concert;
        }
        if (concert.availableSeats <= 0) {
          showToast('This concert is sold out.', 'error');
          return concert;
        }
        updateHistory(concert.name, 'Reserve');
        showToast(`Reserved ${concert.name} successfully`);
        return {
          ...concert,
          reserved: true,
          availableSeats: concert.availableSeats - 1,
        };
      }),
    );
  };

  const handleCancel = (id: string) => {
    setConcerts((prev) =>
      prev.map((concert) => {
        if (concert.id !== id) return concert;
        if (!concert.reserved) {
          showToast('No reservation found to cancel.', 'info');
          return concert;
        }
        updateHistory(concert.name, 'Cancel');
        showToast(`Cancelled ${concert.name} successfully`);
        return {
          ...concert,
          reserved: false,
          availableSeats: concert.availableSeats + 1,
        };
      }),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pl-[240px]">
      <Sidebar initialRole="user" />
      <main className="flex min-h-screen flex-col gap-6 px-10 py-10">
        <Toast
          open={Boolean(toast)}
          message={toast?.message ?? ''}
          variant={toast?.variant ?? 'success'}
          onClose={() => setToast(null)}
        />

        <section className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          {concerts.map((concert) => (
            <div key={concert.id} className="rounded-2xl border border-[#D0D5DD] bg-white p-6 shadow-sm">
              <div className="border-b border-[#E4E7EC] pb-4">
                <h3 className="text-2xl font-semibold text-[#1275D1]">{concert.name}</h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#101828]">{concert.description}</p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#101828]">
                  <UserIcon size={20} />
                  <span className="text-base font-medium">
                    {concert.availableSeats.toLocaleString()} / {concert.totalSeats.toLocaleString()} seats available
                  </span>
                </div>
                {concert.reserved ? (
                  <Button
                    text="Cancel"
                    variant="danger"
                    onClick={() => handleCancel(concert.id)}
                  />
                ) : (
                  <Button
                    text="Reserve"
                    backgroundColor="#1692EC"
                    textColor="#FFFFFF"
                    borderColor="#1692EC"
                    onClick={() => handleReserve(concert.id)}
                    disabled={concert.availableSeats <= 0}
                    className={concert.availableSeats <= 0 ? 'cursor-not-allowed opacity-60' : ''}
                  />
                )}
              </div>
              {concert.availableSeats <= 0 && !concert.reserved ? (
                <p className="mt-2 text-sm text-[#E11D48]">Sold out</p>
              ) : null}
            </div>
          ))}
        </section>

        {/* Reservation history moved to /user/history */}
      </main>
    </div>
  );
}

