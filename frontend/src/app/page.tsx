import { Dashboard, Sidebar } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pl-[240px]">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
