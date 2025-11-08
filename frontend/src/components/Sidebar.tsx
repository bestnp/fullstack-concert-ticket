"use client";

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import {
  HomeIcon,
  InboxIcon,
  LogOutIcon,
  RefreshCcwIcon,
  SaveIcon,
} from '@/icons';
import type { IconProps } from '@/icons';

type Role = 'admin' | 'user';

type NavItem = {
  key: string;
  label: string;
  icon: (props: IconProps) => ReactNode;
  href?: string;
};

const NAVIGATION: Record<Role, NavItem[]> = {
  admin: [
    { key: 'home', label: 'Home', icon: HomeIcon, href: '/' },
    { key: 'history', label: 'History', icon: InboxIcon, href: '/history' },
  ],
  user: [
    { key: 'user-home', label: 'Home', icon: HomeIcon, href: '/user' },
    { key: 'user-history', label: 'History', icon: InboxIcon, href: '/user/history' },
  ],
};

const ROLE_TITLE: Record<Role, string> = {
  admin: 'Admin',
  user: 'User',
};

type SidebarProps = {
  initialRole?: Role;
};

export function Sidebar({ initialRole = 'admin' }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [role, setRole] = useState<Role>(initialRole);
  const determineKey = (currentRole: Role, path: string) => {
    const navList = NAVIGATION[currentRole];
    let bestMatch: NavItem | undefined;

    navList.forEach((item) => {
      if (!item.href) return;

      if (item.href === '/') {
        if (path === '/') {
          bestMatch = item;
        }
        return;
      }

      if (path === item.href) {
        bestMatch = item;
        return;
      }

      if (path.startsWith(item.href)) {
        if (!bestMatch || (bestMatch.href?.length ?? 0) < item.href.length) {
          bestMatch = item;
        }
      }
    });

    return bestMatch?.key ?? navList[0]?.key ?? '';
  };

  const [activeKey, setActiveKey] = useState<string>(() => determineKey(initialRole, pathname));

  const navItems = NAVIGATION[role];

  useEffect(() => {
    setActiveKey(determineKey(role, pathname));
  }, [pathname, role]);

  const handleNavClick = (item: NavItem) => {
    setActiveKey(item.key);
    if (item.href) {
      router.push(item.href);
    }
  };

  const handleSwitchRole = () => {
    setRole((prev) => {
      const nextRole = prev === 'admin' ? 'user' : 'admin';
      setActiveKey(NAVIGATION[nextRole][0]?.key ?? '');
      return nextRole;
    });
    const nextRoute = role === 'admin' ? '/user' : '/';
    router.push(nextRoute);
  };

  const currentRoleTitle = ROLE_TITLE[role];
  const switchLabel = role === 'admin' ? 'Switch to user' : 'Switch to admin';

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-[240px] flex-col border-r border-gray-200 bg-white px-[8px]">
      <div className="space-y-8">
        <div>
          <h2 className="text-[40px] font-semibold text-black p-[24px] mt-[40px]">{currentRoleTitle}</h2>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeKey === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-[8px] px-[8px] py-[16px] text-left text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#EAF5F9] text-black'
                    : 'text-black hover:bg-gray-100'
                }`}
              >
                <IconComponent
                  size={20}
                  color={isActive ? 'black' : 'currentColor'}
                  className="shrink-0"
                />
                <span>{item.label}</span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={handleSwitchRole}
            className="flex w-full cursor-pointer items-center gap-3 rounded-[8px] px-[8px] py-[16px] text-left text-base font-medium text-black transition-colors hover:bg-gray-100"
          >
            <RefreshCcwIcon size={20} className="shrink-0" />
            <span>{switchLabel}</span>
          </button>
        </nav>
      </div>

      <div className="mt-auto pt-8 mb-[40px]">
        <button
          type="button"
          className="flex w-full cursor-pointer items-center gap-3 rounded-[8px] px-[8px] py-[16px] text-left text-base font-medium text-black transition-colors hover:bg-gray-100"
        >
          <LogOutIcon size={20} className="shrink-0" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

