"use client";

import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import {
  HomeIcon,
  InboxIcon,
  LogOutIcon,
  RefreshCcwIcon,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navItems = NAVIGATION[role];
  const activeKey = useMemo(() => determineKey(role, pathname), [role, pathname]);

  const handleNavClick = (item: NavItem) => {
    if (item.href) {
      router.push(item.href);
      setMobileMenuOpen(false);
    }
  };

  const handleSwitchRole = () => {
    setRole((prev) => {
      const nextRole = prev === 'admin' ? 'user' : 'admin';
      return nextRole;
    });
    const nextRoute = role === 'admin' ? '/user' : '/';
    router.push(nextRoute);
    setMobileMenuOpen(false);
  };

  const currentRoleTitle = ROLE_TITLE[role];
  const switchLabel = role === 'admin' ? 'Switch to user' : 'Switch to admin';

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:hidden">
        {/* Burger Menu */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Role Title */}
        <h2 className="text-lg font-semibold text-black">{currentRoleTitle}</h2>

        {/* Profile Icon (placeholder) */}
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200"
          aria-label="Profile"
        >
          <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="fixed left-0 right-0 top-16 z-40 border-b border-gray-200 bg-white shadow-lg lg:hidden">
          <nav className="px-4 py-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeKey === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
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
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-base font-medium text-black transition-colors hover:bg-gray-100"
            >
              <RefreshCcwIcon size={20} className="shrink-0" />
              <span>{switchLabel}</span>
            </button>

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-base font-medium text-black transition-colors hover:bg-gray-100"
            >
              <LogOutIcon size={20} className="shrink-0" />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      )}

      {/* Backdrop for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-30 bg-black/20 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[240px] flex-col border-r border-gray-200 bg-white px-[8px] lg:flex">
        <div className="space-y-8">
          <div>
            <h2 className="mt-[40px] p-[24px] text-[40px] font-semibold text-black">
              {currentRoleTitle}
            </h2>
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

        <div className="mb-[40px] mt-auto pt-8">
          <button
            type="button"
            className="flex w-full cursor-pointer items-center gap-3 rounded-[8px] px-[8px] py-[16px] text-left text-base font-medium text-black transition-colors hover:bg-gray-100"
          >
            <LogOutIcon size={20} className="shrink-0" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

