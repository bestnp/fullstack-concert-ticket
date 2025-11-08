'use client';

import { Sidebar } from '@/components';

type ReservationHistory = {
  id: string;
  dateTime: string;
  concertName: string;
  action: 'Reserve' | 'Cancel';
};

const HISTORY: ReservationHistory[] = [
  {
    id: 'history-1',
    dateTime: '12/09/2024 15:00:00',
    concertName: 'The festival Int 2024',
    action: 'Cancel',
  },
  {
    id: 'history-2',
    dateTime: '12/09/2024 10:39:20',
    concertName: 'The festival Int 2024',
    action: 'Reserve',
  },
];

export default function UserHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 pl-[240px]">
      <Sidebar initialRole="user" />
      <main className="flex min-h-screen flex-col px-10 py-10">
        <section className="mx-auto w-full max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-[#D0D5DD] bg-white shadow-sm">
            <table className="min-w-full border-collapse text-left text-sm text-[#101828]">
              <thead className="bg-[#F8FAFC] text-base font-semibold text-[#101828]">
                <tr>
                  <th className="border-b border-r border-[#D0D5DD] px-4 py-3">Date time</th>
                  <th className="border-b border-r border-[#D0D5DD] px-4 py-3">Concert name</th>
                  <th className="border-b border-[#D0D5DD] px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {HISTORY.length === 0 ? (
                  <tr>
                    <td className="px-4 py-3 text-[#667085]" colSpan={3}>
                      No reservation history yet.
                    </td>
                  </tr>
                ) : (
                  HISTORY.map((entry) => (
                    <tr key={entry.id} className="text-sm text-[#101828]">
                      <td className="border-b border-r border-[#D0D5DD] px-4 py-3">{entry.dateTime}</td>
                      <td className="border-b border-r border-[#D0D5DD] px-4 py-3">{entry.concertName}</td>
                      <td className="border-b border-[#D0D5DD] px-4 py-3">{entry.action}</td>
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

