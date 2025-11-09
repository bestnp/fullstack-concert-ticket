import { fireEvent, render, screen } from '@testing-library/react';

import { Tabs } from '@/components';

describe('Tabs', () => {
  it('renders overview as default and switches to create', () => {
    const onChange = jest.fn();
    render(<Tabs overviewLabel="Overview" createLabel="Create" onChange={onChange} />);

    const overviewButton = screen.getByRole('button', { name: /overview/i });
    const createButton = screen.getByRole('button', { name: /create/i });

    expect(overviewButton.className).toContain('text-[#1692ec]');
    fireEvent.click(createButton);

    expect(onChange).toHaveBeenCalledWith('create');
    expect(createButton.className).toContain('text-[#1692ec]');
  });
});
