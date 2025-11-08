"use client";

import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  createConcert,
  deleteConcert as apiDeleteConcert,
  getConcerts,
  getReservationHistory,
  type ConcertResponse,
  type ReservationHistoryEntry,
} from '@/lib/api';
import { AwardIcon, SaveIcon, UserIcon, XCircleLightIcon } from '@/icons';

import { Button } from './Button';
import { ConcertCard } from './ConcertCard';
import { DashboardCard } from './DashboardCard';
import { Tabs } from './Tabs';
import { Toast, type ToastVariant } from './Toast';

type TabKey = 'overview' | 'create';

type Concert = Pick<
  ConcertResponse,
  'id' | 'name' | 'description' | 'totalSeats' | 'reservedSeats' | 'availableSeats'
>;

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [history, setHistory] = useState<ReservationHistoryEntry[]>([]);
  const [toast, setToast] = useState<{ message: string; variant: ToastVariant } | null>(null);
  const [loadingConcerts, setLoadingConcerts] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    totalSeats: '',
    description: '',
  });

  const showToast = useCallback((message: string, variant: ToastVariant = 'success') => {
    setToast({ message, variant });
  }, []);

  const handleCloseToast = () => {
    setToast(null);
  };

  const handleFormChange = (key: 'name' | 'totalSeats' | 'description', value: string) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const loadConcerts = useCallback(async () => {
    setLoadingConcerts(true);
    try {
      const data = await getConcerts();
      setConcerts(
        data.map(({ id, name, description, totalSeats, reservedSeats, availableSeats }) => ({
          id,
          name,
          description,
          totalSeats,
          reservedSeats,
          availableSeats,
        })),
      );
    } catch (error) {
      console.error(error);
      showToast('Failed to load concerts', 'error');
    } finally {
      setLoadingConcerts(false);
    }
  }, [showToast]);

  const loadHistory = useCallback(async () => {
    setLoadingHistory(true);
    try {
      const entries = await getReservationHistory();
      setHistory(entries);
    } catch (error) {
      console.error(error);
      showToast('Failed to load reservation history', 'error');
    } finally {
      setLoadingHistory(false);
    }
  }, [showToast]);

  useEffect(() => {
    void loadConcerts();
    void loadHistory();
  }, [loadConcerts, loadHistory]);

  const handleDelete = async (id: string, name: string) => {
    try {
      await apiDeleteConcert(id);
      setConcerts((prev) => prev.filter((concert) => concert.id !== id));
      await loadHistory();
      showToast(`Deleted ${name} successfully`);
    } catch (error) {
      console.error(error);
      showToast('Failed to delete concert', 'error');
    }
  };

  const handleCreateSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = formValues.name.trim();
    const trimmedDescription = formValues.description.trim();
    const seatsValue = formValues.totalSeats.trim();

    if (!trimmedName || !trimmedDescription || !seatsValue) {
      showToast('Please fill in all fields before saving.', 'error');
      return;
    }

    const parsedSeats = Number(seatsValue);
    const totalSeats = Number.isFinite(parsedSeats) && parsedSeats >= 0 ? Math.floor(parsedSeats) : 0;

    try {
      const created = await createConcert({
        name: trimmedName,
        description: trimmedDescription,
        totalSeats,
      });

      setConcerts((prev) => [
        ...prev,
        {
          id: created.id,
          name: created.name,
          description: created.description,
          totalSeats: created.totalSeats,
          reservedSeats: created.reservedSeats,
          availableSeats: created.totalSeats - created.reservedSeats,
        },
      ]);
      setFormValues({ name: '', totalSeats: '', description: '' });
      setActiveTab('overview');
      showToast(`Created ${trimmedName} successfully`);
    } catch (error) {
      console.error(error);
      showToast('Failed to create concert', 'error');
    }
  };

  const totalSeats = useMemo(
    () => concerts.reduce((sum, concert) => sum + concert.totalSeats, 0),
    [concerts],
  );

  const totalReserved = useMemo(
    () =>
      concerts.reduce(
        (sum, concert) => sum + (concert.totalSeats - concert.availableSeats),
        0,
      ),
    [concerts],
  );

  const totalCancelled = useMemo(
    () => history.filter((entry) => entry.action === 'CANCEL').length,
    [history],
  );

  return (
    <main className="flex flex-1 flex-col gap-10 px-10 py-10">
      <Toast
        open={Boolean(toast)}
        message={toast?.message ?? ''}
        variant={toast?.variant ?? 'success'}
        onClose={handleCloseToast}
      />

      <section className="mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-6 md:flex-nowrap">
        <DashboardCard
          icon={UserIcon}
          text="Total of seats"
          number={totalSeats}
          color="#0070A4"
          size="base"
        />
        <DashboardCard
          icon={AwardIcon}
          text="Reserved"
          number={totalReserved}
          color="#00A58B"
          size="base"
        />
        <DashboardCard
          icon={XCircleLightIcon}
          text="Cancel"
          number={loadingHistory ? 0 : totalCancelled}
          color="#F96464"
          size="base"
        />
      </section>

      <section className="mx-auto w-full max-w-5xl space-y-6">
        <Tabs
          overviewLabel="Overview"
          createLabel="Create"
          defaultActive={activeTab}
          onChange={(key) => setActiveTab(key)}
        />

        {activeTab === 'overview' ? (
          <div className="flex flex-col gap-6">
            {loadingConcerts ? (
              <div className="rounded-2xl border border-[#D0D5DD] bg-white p-10 text-center text-[#667085]">
                <p>Loading concerts...</p>
              </div>
            ) : concerts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#D0D5DD] bg-white p-10 text-center text-[#667085]">
                <p>No concerts available.</p>
              </div>
            ) : (
              concerts.map((concert) => (
                <ConcertCard
                  key={concert.id}
                  name={concert.name}
                  description={concert.description}
                  totalSeats={concert.totalSeats}
                  onConfirmDelete={() => handleDelete(concert.id, concert.name)}
                />
              ))
            )}
          </div>
        ) : (
          <form
            onSubmit={handleCreateSubmit}
            className="rounded-2xl border border-[#D0D5DD] bg-white p-10 shadow-sm"
          >
            <div>
              <h3 className="text-[40px] font-semibold text-[#1692EC]">Create</h3>
              <div className="mt-2 h-[1px] w-[942px] rounded-full bg-[#C2C2C2]" aria-hidden />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[24px] font-regular text-[#101828]" htmlFor="concert-name">
                  Concert Name
                </label>
                <input
                  id="concert-name"
                  type="text"
                  placeholder="Please input concert name"
                  value={formValues.name}
                  onChange={(event) => handleFormChange('name', event.target.value)}
                  className="rounded-md border border-[#D0D5DD] px-3 py-2 text-sm text-[#101828] placeholder:text-[#C2C2C2] outline-none focus:border-[#1275D1]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[24px] font-regular text-[#101828]" htmlFor="total-seats">
                  Total of seat
                </label>
                <div className="relative">
                  <input
                    id="total-seats"
                    type="number"
                    min={0}
                    placeholder="Please input seats"
                    value={formValues.totalSeats}
                    onChange={(event) => handleFormChange('totalSeats', event.target.value)}
                    className="w-full rounded-md border border-[#D0D5DD] px-3 py-2 pr-10 text-sm text-[#101828] placeholder:text-[#C2C2C2] outline-none focus:border-[#1275D1]"
                  />
                  <UserIcon size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085]" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label className="text-[24px] font-regular text-[#101828]" htmlFor="concert-description">
                Description
              </label>
              <textarea
                id="concert-description"
                placeholder="Please input description"
                value={formValues.description}
                onChange={(event) => handleFormChange('description', event.target.value)}
                rows={4}
                className="w-full rounded-md border border-[#D0D5DD] px-3 py-2 text-sm text-[#101828] placeholder:text-[#C2C2C2] outline-none focus:border-[#1275D1]"
              />
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                type="submit"
                text="Save"
                icon={SaveIcon}
                backgroundColor="#1692EC"
                textColor="#FFFFFF"
              />
            </div>
          </form>
        )}
      </section>
    </main>
  );
}

