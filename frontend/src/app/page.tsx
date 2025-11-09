import { Dashboard, Sidebar } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 lg:pl-[240px] lg:pt-0">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
