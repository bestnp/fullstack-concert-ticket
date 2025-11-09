"use client";

import { useEffect, useState } from 'react';

import { Sidebar, Toast, type ToastVariant } from '@/components';
import { getReservationHistory, type ReservationHistoryEntry } from '@/lib/api';

export default function HistoryPage() {
  const [history, setHistory] = useState<ReservationHistoryEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; variant: ToastVariant } | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        const data = await getReservationHistory();
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

    void fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-16 lg:pl-[240px] lg:pt-0">
      <Sidebar />
      <main className="flex min-h-screen flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <Toast
          open={Boolean(toast)}
          message={toast?.message ?? ''}
          variant={toast?.variant ?? 'success'}
          onClose={() => setToast(null)}
        />

        <section className="mx-auto w-full max-w-5xl">
          <h2 className="mb-4 text-2xl font-semibold text-black sm:mb-6 sm:text-3xl">Admin History</h2>
          <div className="overflow-x-auto rounded-[8px] border border-[#5B5B5B] bg-white shadow-sm">
            <table className="min-w-full border-collapse text-left text-xs text-[#101828] sm:text-sm">
              <thead className="bg-[#F8FAFC] text-sm font-semibold text-[#101828] sm:text-base">
                <tr>
                  <th className="border-b border-r border-[#5B5B5B] px-2 py-2 sm:px-4 sm:py-3">Date time</th>
                  <th className="border-b border-r border-[#5B5B5B] px-2 py-2 sm:px-4 sm:py-3">Username</th>
                  <th className="border-b border-r border-[#5B5B5B] px-2 py-2 sm:px-4 sm:py-3">Concert name</th>
                  <th className="border-b border-[#5B5B5B] px-2 py-2 sm:px-4 sm:py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td className="px-2 py-2 sm:px-4 sm:py-3" colSpan={4}>
                      Loading history...
                    </td>
                  </tr>
                ) : history.length === 0 ? (
                  <tr>
                    <td className="px-2 py-2 text-[#667085] sm:px-4 sm:py-3" colSpan={4}>
                      No reservation history yet.
                    </td>
                  </tr>
                ) : (
                  history.map((entry, index) => (
                    <tr key={entry.id} className="text-xs text-[#101828] sm:text-sm">
                      <td className={`border-r border-[#5B5B5B] px-2 py-2 sm:px-4 sm:py-3 ${index < history.length - 1 ? 'border-b' : ''}`}>
                        {new Date(entry.occurredAt).toLocaleString()}
                      </td>
                      <td className={`border-r border-[#5B5B5B] px-2 py-2 sm:px-4 sm:py-3 ${index < history.length - 1 ? 'border-b' : ''}`}>
                        {entry.user?.fullName ?? entry.userId}
                      </td>
                      <td className={`border-r border-[#5B5B5B] px-2 py-2 sm:px-4 sm:py-3 ${index < history.length - 1 ? 'border-b' : ''}`}>
                        {entry.concert?.name ?? entry.concertId}
                      </td>
                      <td className={`border-[#5B5B5B] px-2 py-2 text-[#1275D1] sm:px-4 sm:py-3 ${index < history.length - 1 ? 'border-b' : ''}`}>
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

