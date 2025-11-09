import { fireEvent, render, screen } from '@testing-library/react';

import { Modal } from '@/components';
import type { IconProps } from '@/icons';

describe('Modal', () => {
  const DummyIcon = ({ size }: IconProps) => <svg data-testid="modal-icon" width={size} height={size} />;

  it('returns null when closed', () => {
    const { container } = render(
      <Modal
        open={false}
        title="Confirm"
        description="Are you sure?"
        primaryAction={{ text: 'Yes' }}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('renders content and triggers actions when open', () => {
    const onPrimary = jest.fn();
    const onSecondary = jest.fn();

    render(
      <Modal
        open
        title="Confirm"
        description="Are you sure?"
        highlight="Concert"
        icon={DummyIcon}
        primaryAction={{ text: 'Delete', onClick: onPrimary }}
        secondaryAction={{ text: 'Cancel', onClick: onSecondary }}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
    fireEvent.click(screen.getByRole('button', { name: /delete/i }));

    expect(screen.getByText(/confirm/i)).toBeInTheDocument();
    expect(screen.getByTestId('modal-icon')).toBeInTheDocument();
    expect(onSecondary).toHaveBeenCalled();
    expect(onPrimary).toHaveBeenCalled();
  });
});
