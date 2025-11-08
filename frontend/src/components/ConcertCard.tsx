'use client';

import { useState } from 'react';

import { Button, Modal } from '@/components';
import { Trash2Icon, UserIcon, XCircleIcon } from '@/icons';

type ConcertCardProps = {
  name: string;
  description: string;
  totalSeats: number;
  onConfirmDelete?: () => void;
};

export function ConcertCard({ name, description, totalSeats, onConfirmDelete }: ConcertCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const confirmDelete = () => {
    onConfirmDelete?.();
    setModalOpen(false);
  };

  return (
    <div className="rounded-2xl border border-[#D0D5DD] bg-white p-6 shadow-sm">
      <div className="border-b border-[#E4E7EC] pb-4">
        <h3 className="text-2xl font-semibold text-[#1275D1]">{name}</h3>
      </div>
      <p className="mt-4 text-base leading-relaxed text-[#101828]">{description}</p>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#101828]">
          <UserIcon size={24} />
          <span className="text-base font-medium">{totalSeats}</span>
        </div>
        <Button text="Delete" variant="danger" icon={Trash2Icon} onClick={handleDelete} />
      </div>

      <Modal
        open={modalOpen}
        title="Are you sure to delete?"
        description="Please confirm you want to remove this concert."
        highlight={name}
        icon={XCircleIcon}
        iconColor="#F96464"
        iconSize={48}
        onClose={handleClose}
        secondaryAction={{
          text: 'Cancel',
          variant: 'outline',
          onClick: handleClose,
        }}
        primaryAction={{
          text: 'Yes, Delete',
          variant: 'danger',
          onClick: confirmDelete,
        }}
      />
    </div>
  );
}

