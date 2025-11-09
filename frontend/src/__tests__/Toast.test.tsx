import { act, render, screen } from '@testing-library/react';

import { Toast } from '@/components';

describe('Toast', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders message and closes after duration', () => {
    const handleClose = jest.fn();
    render(<Toast open message="Saved" onClose={handleClose} duration={500} />);

    expect(screen.getByText(/saved/i)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(handleClose).toHaveBeenCalled();
  });
});
