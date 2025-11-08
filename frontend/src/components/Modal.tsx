import type { MouseEvent, ReactNode } from 'react';

import { Button } from '@/components';
import type { IconProps } from '@/icons';

type ModalAction = {
  text: string;
  onClick?: () => void;
  icon?: (props: IconProps) => ReactNode;
  variant?: 'primary' | 'danger' | 'neutral' | 'outline';
};

type ModalProps = {
  open: boolean;
  title: string;
  description: string;
  highlight?: string;
  icon?: (props: IconProps) => ReactNode;
  iconColor?: string;
  iconSize?: number;
  onClose?: () => void;
  primaryAction: ModalAction;
  secondaryAction?: ModalAction;
};

export function Modal({
  open,
  title,
  description,
  highlight,
  icon: Icon,
  iconColor = '#F96464',
  iconSize = 44,
  onClose,
  primaryAction,
  secondaryAction,
}: ModalProps) {
  if (!open) return null;

  const handleContainerClick = () => {
    onClose?.();
  };

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" 
      onClick={handleContainerClick}
    >
      <div className="w-full max-w-md rounded-[24px] bg-white p-10 shadow-xl" onClick={handleContentClick}>
        <div className="flex flex-col items-center text-center">
          {Icon ? (
            <div className="flex items-center justify-center">
              <Icon size={iconSize} color={iconColor} />
            </div>
          ) : null}
          <h2 className="mt-6 text-2xl font-semibold text-black">{title}</h2>
          <p className="mt-2 text-base text-gray-600">{description}</p>
          {highlight ? (
            <p className="mt-1 text-xl font-semibold text-black">“{highlight}”</p>
          ) : null}

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            {secondaryAction ? (
              <Button
                text={secondaryAction.text}
                icon={secondaryAction.icon as any}
                variant={secondaryAction.variant ?? 'outline'}
                className="w-full sm:w-40"
                onClick={secondaryAction.onClick}
              />
            ) : null}
            <Button
              text={primaryAction.text}
              icon={primaryAction.icon as any}
              variant={primaryAction.variant ?? 'danger'}
              className="w-full sm:w-40"
              onClick={primaryAction.onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

