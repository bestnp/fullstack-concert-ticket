import type { ComponentType } from 'react';

import type { IconProps } from '@/icons';

type CardSize = 'base' | 'small' | 'large';

const SIZE_DIMENSIONS: Record<CardSize, { width: number; height: number }> = {
  base: { width: 350, height: 234 },
  small: { width: 300, height: 200 },
  large: { width: 420, height: 260 },
};

type DashboardCardProps = {
  icon: ComponentType<IconProps>;
  text: string;
  number: number | string;
  /** Card background color. */
  color?: string;
  /** Text/icon color; defaults to white to contrast with accent backgrounds. */
  textColor?: string;
  /** Preset size that scales the card; defaults to 350x234 (base). */
  size?: CardSize;
  className?: string;
};

export function DashboardCard({
  icon: Icon,
  text,
  number,
  color = 'var(--color-reserve)',
  textColor = '#ffffff',
  size = 'base',
  className,
}: DashboardCardProps) {
  const dimensions = SIZE_DIMENSIONS[size];

  return (
    <article
      style={{ backgroundColor: color, color: textColor }}
      className={`flex w-full flex-col justify-center rounded-2xl p-4 shadow-sm sm:p-6 ${className ?? ''}`.trim()}
    >
      <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-4">
        <div className="flex items-center justify-center">
          <Icon size={32} color={textColor} className="sm:h-10 sm:w-10" />
        </div>
        <span className="text-lg font-regular sm:text-[24px]" style={{ color: textColor }}>
          {text}
        </span>
        <p className="text-[40px] font-regular sm:text-[60px]" style={{ color: textColor }}>
          {number}
        </p>
      </div>
    </article>
  );
}

