"use client";

import { useCallback, useEffect, useState } from 'react';

import {
  cancelReservation,
  ensureDemoUser,
  getConcerts,
  reserveConcert,
  type ConcertResponse,
  type UserResponse,
} from '@/lib/api';
import { Button, Sidebar, Toast, type ToastVariant } from '@/components';
import { UserIcon } from '@/icons';

type UserConcert = Pick<
  ConcertResponse,
  'id' | 'name' | 'description' | 'totalSeats' | 'availableSeats' | 'reservedSeats'
> & {
  reservedByUser: boolean;
};

export default function UserPage() {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [concerts, setConcerts] = useState<UserConcert[]>([]);
  const [toast, setToast] = useState<{ message: string; variant: ToastVariant } | null>(null);
  const [loadingConcerts, setLoadingConcerts] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(null);

  const showToast = useCallback((message: string, variant: ToastVariant = 'success') => {
    setToast({ message, variant });
  }, []);

  const handleCloseToast = () => {
    setToast(null);
  };

  const loadConcerts = useCallback(
    async (currentUser: UserResponse) => {
      setLoadingConcerts(true);
      try {
        const data = await getConcerts({ userId: currentUser.id });
        setConcerts(
          data.map((concert) => ({
            id: concert.id,
            name: concert.name,
            description: concert.description,
            totalSeats: concert.totalSeats,
            availableSeats: concert.availableSeats,
            reservedSeats: concert.reservedSeats,
            reservedByUser:
              (concert as ConcertResponse & { reservedByUser?: boolean }).reservedByUser ?? false,
          })),
        );
      } catch (error) {
        console.error(error);
        showToast('Failed to load concerts', 'error');
      } finally {
        setLoadingConcerts(false);
      }
    },
    [showToast],
  );

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const ensuredUser = await ensureDemoUser();
        setUser(ensuredUser);
        await loadConcerts(ensuredUser);
      } catch (error) {
        console.error(error);
        showToast('Unable to initialise user data', 'error');
      }
    };

    void bootstrap();
  }, [loadConcerts, showToast]);

  const handleReserve = async (concertId: string) => {
    if (!user) return;
    setProcessingId(concertId);
    try {
      await reserveConcert({ userId: user.id, concertId });
      await loadConcerts(user);
      showToast('Reserved concert successfully');
    } catch (error) {
      console.error(error);
      showToast(
        error instanceof Error ? error.message : 'Failed to reserve concert',
        'error',
      );
    } finally {
      setProcessingId(null);
    }
  };

  const handleCancel = async (concertId: string) => {
    if (!user) return;
    setProcessingId(concertId);
    try {
      await cancelReservation({ userId: user.id, concertId });
      await loadConcerts(user);
      showToast('Cancelled reservation successfully');
    } catch (error) {
      console.error(error);
      showToast(
        error instanceof Error ? error.message : 'Failed to cancel reservation',
        'error',
      );
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 lg:pl-[240px] lg:pt-0">
      <Sidebar initialRole="user" />
      <main className="flex min-h-screen flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <Toast
          open={Boolean(toast)}
          message={toast?.message ?? ''}
          variant={toast?.variant ?? 'success'}
          onClose={handleCloseToast}
        />

        <section className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:gap-6">
          {loadingConcerts ? (
            <div className="rounded-2xl border border-[#D0D5DD] bg-white p-6 text-center text-[#667085] sm:p-10">
              <p>Loading concerts...</p>
            </div>
          ) : concerts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[#D0D5DD] bg-white p-6 text-center text-[#667085] sm:p-10">
              <p>No concerts available.</p>
            </div>
          ) : (
            concerts.map((concert) => {
              const isProcessing = processingId === concert.id;
              return (
                <div
                  key={concert.id}
                  className="rounded-2xl border border-[#D0D5DD] bg-white p-4 shadow-sm sm:p-6"
                >
                  <div className="border-b border-[#E4E7EC] pb-3 sm:pb-4">
                    <h3 className="text-lg font-semibold text-[#1275D1] sm:text-xl lg:text-2xl">{concert.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#101828] sm:mt-4 sm:text-base">
                    {concert.description}
                  </p>

                  <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-[#101828]">
                      <UserIcon size={18} className="sm:h-5 sm:w-5" />
                      <span className="text-sm font-medium sm:text-base">
                        {concert.availableSeats.toLocaleString()} /{' '}
                        {concert.totalSeats.toLocaleString()} seats available
                      </span>
                    </div>
                    {concert.reservedByUser ? (
                      <Button
                        text="Cancel"
                        variant="danger"
                        onClick={() => handleCancel(concert.id)}
                        disabled={isProcessing}
                        size="sm"
                        className={`w-full sm:w-auto ${isProcessing ? 'cursor-wait opacity-75' : ''}`}
                      />
                    ) : (
                      <Button
                        text="Reserve"
                        backgroundColor="#1692EC"
                        textColor="#FFFFFF"
                        borderColor="#1692EC"
                        onClick={() => handleReserve(concert.id)}
                        disabled={concert.availableSeats <= 0 || isProcessing}
                        size="sm"
                        className={`w-full sm:w-auto ${
                          concert.availableSeats <= 0 || isProcessing
                            ? 'cursor-not-allowed opacity-60'
                            : ''
                        }`}
                      />
                    )}
                  </div>
                  {concert.availableSeats <= 0 && !concert.reservedByUser ? (
                    <p className="mt-2 text-sm text-[#E11D48]">Sold out</p>
                  ) : null}
                </div>
              );
            })
          )}
        </section>
      </main>
    </div>
  );
}

