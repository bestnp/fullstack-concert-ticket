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
    <div className="rounded-[8px] border border-[#D0D5DD] bg-white p-4 shadow-sm sm:p-6">
      <div className="border-b border-[#E4E7EC] pb-3 sm:pb-4">
        <h3 className="text-lg font-semibold text-[#1692EC] sm:text-xl lg:text-2xl">{name}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#101828] sm:mt-4 sm:text-base">{description}</p>

      <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-[#101828]">
          <UserIcon size={20} className="sm:h-6 sm:w-6" />
          <span className="text-sm font-medium sm:text-base">{totalSeats}</span>
        </div>
        <Button
          text="Delete"
          variant="danger"
          icon={Trash2Icon}
          onClick={handleDelete}
          size="sm"
          className="self-end px-3 sm:self-auto sm:px-4"
        />
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

