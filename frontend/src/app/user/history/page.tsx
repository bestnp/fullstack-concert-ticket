"use client";

import { useEffect, useState } from 'react';

import { Sidebar, Toast, type ToastVariant } from '@/components';
import {
  ensureDemoUser,
  getReservationHistory,
  type ReservationHistoryEntry,
  type UserResponse,
} from '@/lib/api';

export default function UserHistoryPage() {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [history, setHistory] = useState<ReservationHistoryEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; variant: ToastVariant } | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const ensuredUser = await ensureDemoUser();
        setUser(ensuredUser);
        const data = await getReservationHistory(ensuredUser.id);
        setHistory(data);
      } catch (error) {
        console.error(error);
        setToast({
          message: error instanceof Error ? error.message : 'Failed to load reservation history',
          variant: 'error',
        });
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-16 lg:pl-[240px] lg:pt-0">
      <Sidebar initialRole="user" />
      <main className="flex min-h-screen flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <Toast
          open={Boolean(toast)}
          message={toast?.message ?? ''}
          variant={toast?.variant ?? 'success'}
          onClose={() => setToast(null)}
        />

        <section className="mx-auto w-full max-w-5xl">
          <header className="mb-4 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-[#1275D1] sm:text-2xl">Reservation history</h2>
            {user ? <span className="text-sm text-[#667085]">{user.fullName}</span> : null}
          </header>

          <div className="overflow-x-auto rounded-2xl border border-[#D0D5DD] bg-white shadow-sm">
            <table className="min-w-full border-collapse text-left text-xs text-[#101828] sm:text-sm">
              <thead className="bg-[#F8FAFC] text-sm font-semibold text-[#101828] sm:text-base">
                <tr>
                  <th className="border-b border-r border-[#D0D5DD] px-2 py-2 sm:px-4 sm:py-3">Date time</th>
                  <th className="border-b border-r border-[#D0D5DD] px-2 py-2 sm:px-4 sm:py-3">Concert name</th>
                  <th className="border-b border-[#D0D5DD] px-2 py-2 sm:px-4 sm:py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td className="px-2 py-2 sm:px-4 sm:py-3" colSpan={3}>
                      Loading history...
                    </td>
                  </tr>
                ) : history.length === 0 ? (
                  <tr>
                    <td className="px-2 py-2 text-[#667085] sm:px-4 sm:py-3" colSpan={3}>
                      No reservation history yet.
                    </td>
                  </tr>
                ) : (
                  history.map((entry) => (
                    <tr key={entry.id} className="text-xs text-[#101828] sm:text-sm">
                      <td className="border-b border-r border-[#D0D5DD] px-2 py-2 sm:px-4 sm:py-3">
                        {new Date(entry.occurredAt).toLocaleString()}
                      </td>
                      <td className="border-b border-r border-[#D0D5DD] px-2 py-2 sm:px-4 sm:py-3">
                        {entry.concert?.name ?? entry.concertId}
                      </td>
                      <td className="border-b border-[#D0D5DD] px-2 py-2 text-[#1275D1] sm:px-4 sm:py-3">
                        {entry.action === 'RESERVE' ? 'Reserve' : 'Cancel'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

