import { render, screen } from '@testing-library/react';

import { Button } from '@/components/Button';
import type { IconProps } from '@/icons';

describe('Button', () => {
  const DummyIcon = (props: IconProps) => <svg data-testid="icon" {...props} />;

  it('renders text and icon when provided', () => {
    render(<Button text="Delete" icon={DummyIcon} />);

    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('centers text when no icon provided', () => {
    render(<Button text="Submit" />);

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeInTheDocument();
    expect(button.className).toContain('justify-center');
  });
});
