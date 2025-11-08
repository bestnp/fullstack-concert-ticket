'use client';

import { useState } from 'react';

type TabKey = 'overview' | 'create';

type TabsProps = {
  overviewLabel: string;
  createLabel: string;
  defaultActive?: TabKey;
  onChange?: (key: TabKey) => void;
};

export function Tabs({ overviewLabel, createLabel, defaultActive = 'overview', onChange }: TabsProps) {
  const [active, setActive] = useState<TabKey>(defaultActive);

  const handleClick = (key: TabKey) => {
    setActive(key);
    onChange?.(key);
  };

  const tabClass = (key: TabKey) =>
    `relative cursor-pointer px-3 pb-2 text-lg font-regular transition-colors ${
      active === key ? 'text-[#1692ec] font-semibold' : 'text-[#5C5C5C]'
    }`;

  return (
    <div className="flex gap-8 ">
      <button type="button" className={tabClass('overview')} onClick={() => handleClick('overview')}>
        {overviewLabel}
        {active === 'overview' ? <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#1692ec]" /> : null}
      </button>
      <button type="button" className={tabClass('create')} onClick={() => handleClick('create')}>
        {createLabel}
        {active === 'create' ? <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#1692ec]" /> : null}
      </button>
    </div>
  );
}

