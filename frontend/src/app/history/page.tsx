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
    <div className="min-h-screen bg-gray-50 pl-[240px]">
      <Sidebar />
      <main className="flex min-h-screen flex-col px-10 py-10">
        <Toast
          open={Boolean(toast)}
          message={toast?.message ?? ''}
          variant={toast?.variant ?? 'success'}
          onClose={() => setToast(null)}
        />

        <section className="mx-auto w-full max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-[#D0D5DD] bg-white shadow-sm">
            <table className="min-w-full border-collapse text-left text-sm text-[#101828]">
              <thead className="bg-[#F8FAFC] text-base font-semibold text-[#101828]">
                <tr>
                  <th className="border-b border-r border-[#D0D5DD] px-4 py-3">Date time</th>
                  <th className="border-b border-r border-[#D0D5DD] px-4 py-3">Username</th>
                  <th className="border-b border-r border-[#D0D5DD] px-4 py-3">Concert name</th>
                  <th className="border-b border-[#D0D5DD] px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td className="px-4 py-3" colSpan={4}>
                      Loading history...
                    </td>
                  </tr>
                ) : history.length === 0 ? (
                  <tr>
                    <td className="px-4 py-3 text-[#667085]" colSpan={4}>
                      No reservation history yet.
                    </td>
                  </tr>
                ) : (
                  history.map((entry) => (
                    <tr key={entry.id} className="text-sm text-[#101828]">
                      <td className="border-b border-r border-[#D0D5DD] px-4 py-3">
                        {new Date(entry.occurredAt).toLocaleString()}
                      </td>
                      <td className="border-b border-r border-[#D0D5DD] px-4 py-3">
                        {entry.user?.fullName ?? entry.userId}
                      </td>
                      <td className="border-b border-r border-[#D0D5DD] px-4 py-3">
                        {entry.concert?.name ?? entry.concertId}
                      </td>
                      <td className="border-b border-[#D0D5DD] px-4 py-3 text-[#1275D1]">
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

