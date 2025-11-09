import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Sidebar } from '@/components/Sidebar';

const pushMock = jest.fn();
let mockPathname = '/';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: pushMock }),
  usePathname: () => mockPathname,
}));

describe('Sidebar', () => {
  beforeEach(() => {
    pushMock.mockClear();
    mockPathname = '/';
  });

  it('renders admin navigation and highlights current path', () => {
    render(<Sidebar initialRole="admin" />);

    const homeButton = screen.getByRole('button', { name: /home/i });
    expect(homeButton.className).toContain('bg-[#EAF5F9]');
  });

  it('navigates when clicking menu', () => {
    render(<Sidebar initialRole="admin" />);

    const historyButton = screen.getByRole('button', { name: /history/i });
    fireEvent.click(historyButton);

    expect(pushMock).toHaveBeenCalledWith('/history');
  });

  it('switches role and navigates to user home', () => {
    render(<Sidebar initialRole="admin" />);

    const switchButton = screen.getByRole('button', { name: /switch to user/i });
    fireEvent.click(switchButton);

    expect(pushMock).toHaveBeenCalledWith('/user');
  });
});
