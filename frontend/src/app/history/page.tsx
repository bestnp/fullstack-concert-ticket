'use client';

import { Sidebar } from '@/components';

type HistoryItem = {
  id: string;
  dateTime: string;
  username: string;
  concertName: string;
  action: string;
};

const HISTORY: HistoryItem[] = [
  {
    id: 'history-1',
    dateTime: '12/09/2024 15:00:00',
    username: 'Sara John',
    concertName: 'The festival Int 2024',
    action: 'Cancel',
  },
  {
    id: 'history-2',
    dateTime: '12/09/2024 10:39:20',
    username: 'Sara John',
    concertName: 'The festival Int 2024',
    action: 'Reserve',
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 pl-[240px]">
      <Sidebar />
      <main className="flex min-h-screen flex-col px-10 py-10">
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
                {HISTORY.map((item) => (
                  <tr key={item.id} className="text-sm text-[#101828]">
                    <td className="border-b border-r border-[#D0D5DD] px-4 py-3">{item.dateTime}</td>
                    <td className="border-b border-r border-[#D0D5DD] px-4 py-3">{item.username}</td>
                    <td className="border-b border-r border-[#D0D5DD] px-4 py-3">{item.concertName}</td>
                    <td className="border-b border-[#D0D5DD] px-4 py-3">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

