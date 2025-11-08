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
      style={{ width: dimensions.width, height: dimensions.height, backgroundColor: color, color: textColor }}
      className={`flex flex-col justify-center rounded-2xl p-6 shadow-sm ${className ?? ''}`.trim()}
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center justify-center">
          <Icon size={40} color={textColor} />
        </div>
        <span className="text-[24px] font-regular" style={{ color: textColor }}>
          {text}
        </span>
        <p className="text-[60px] font-regular" style={{ color: textColor }}>
          {number}
        </p>
      </div>
    </article>
  );
}

