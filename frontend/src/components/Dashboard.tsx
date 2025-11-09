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
import { AwardIcon, UserIcon, XCircleLightIcon } from '@/icons';

import { ConcertCard } from './ConcertCard';
import { DashboardCard } from './DashboardCard';
import { CreateConcertForm, type CreateConcertFormField, type CreateConcertFormValues } from './CreateConcertForm';
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
  const [formValues, setFormValues] = useState<CreateConcertFormValues>({
    name: '',
    totalSeats: '',
    description: '',
  });
  const [creatingConcert, setCreatingConcert] = useState(false);

  const showToast = useCallback((message: string, variant: ToastVariant = 'success') => {
    setToast({ message, variant });
  }, []);

  const handleCloseToast = () => {
    setToast(null);
  };

  const handleFormChange = (key: CreateConcertFormField, value: string) => {
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

    setCreatingConcert(true);
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
    } finally {
      setCreatingConcert(false);
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
    <main className="flex flex-1 flex-col gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 lg:gap-10 lg:px-10 lg:py-10">
      <Toast
        open={Boolean(toast)}
        message={toast?.message ?? ''}
        variant={toast?.variant ?? 'success'}
        onClose={handleCloseToast}
      />

      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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
              <div className="rounded-2xl border border-[#D0D5DD] bg-white p-6 text-center text-[#667085] sm:p-10">
                <p>Loading concerts...</p>
              </div>
            ) : concerts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#D0D5DD] bg-white p-6 text-center text-[#667085] sm:p-10">
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
          <CreateConcertForm
            values={formValues}
            onChange={handleFormChange}
            onSubmit={handleCreateSubmit}
            isSubmitting={creatingConcert}
          />
        )}
      </section>
    </main>
  );
}

