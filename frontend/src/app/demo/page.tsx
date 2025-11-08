'use client';

import { useState } from 'react';

import { Button, ConcertCard, Dashboard, Modal, Tabs, Toast } from '@/components';
import { Trash2Icon, XCircleIcon } from '@/icons';

export default function DemoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col gap-12 bg-gray-100 p-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-black">Component Preview</h1>
        <p className="text-gray-600">
          Use this page to interactively preview shared UI components (buttons, modal, dashboard).
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-black">Buttons</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button text="Primary" />
          <Button text="Danger" variant="danger" icon={Trash2Icon} />
          <Button text="Neutral" variant="neutral" icon={Trash2Icon} iconPosition="right" />
          <Button text="Outline" variant="outline" icon={Trash2Icon} />
          <Button text="Custom" backgroundColor="#00A58B" textColor="#FFFFFF" size="lg" />
          <Button text="Open Modal" variant="danger" icon={Trash2Icon} onClick={() => setModalOpen(true)} />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-black">Dashboard</h2>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <Dashboard />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-black">Concert Card</h2>
        <ConcertCard
          name="Concert Name 1"
          description="Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non. Fusce dignissim turpis sed non est orci sed in. Blandit ut purus nunc sed donec commodo morbi diam scelerisque."
          totalSeats={500}
          onConfirmDelete={() => setToastOpen(true)}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-black">Tabs</h2>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <Tabs overviewLabel="Overview" createLabel="Create" />
        </div>
      </section>

      <Modal
        open={modalOpen}
        title="Are you sure to delete?"
        description="Confirm action for"
        highlight="Concert Name 2"
        icon={XCircleIcon}
        onClose={() => setModalOpen(false)}
        secondaryAction={{
          text: 'Cancel',
          variant: 'outline',
          onClick: () => setModalOpen(false),
        }}
        primaryAction={{
          text: 'Yes, Delete',
          icon: Trash2Icon,
          variant: 'danger',
          onClick: () => {
            setModalOpen(false);
            setToastOpen(true);
          },
        }}
      />

      <Toast
        open={toastOpen}
        message="Delete successfully"
        onClose={() => setToastOpen(false)}
        variant="success"
      />
    </div>
  );
}

