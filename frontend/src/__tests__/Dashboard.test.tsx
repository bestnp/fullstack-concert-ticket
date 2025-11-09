import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dashboard } from '@/components/Dashboard';
import {
  createConcert,
  deleteConcert,
  getConcerts,
  getReservationHistory,
} from '@/lib/api';

jest.mock('@/lib/api', () => ({
  getConcerts: jest.fn(),
  getReservationHistory: jest.fn(),
  createConcert: jest.fn(),
  deleteConcert: jest.fn(),
}));

describe('Dashboard', () => {
  const concertsMock = getConcerts as jest.Mock;
  const historyMock = getReservationHistory as jest.Mock;
  const createMock = createConcert as jest.Mock;
  const deleteMock = deleteConcert as jest.Mock;

  beforeEach(() => {
    concertsMock.mockResolvedValue([
      {
        id: 'concert-1',
        name: 'Concert 1',
        description: 'First concert',
        totalSeats: 120,
        reservedSeats: 20,
        availableSeats: 100,
      },
      {
        id: 'concert-2',
        name: 'Concert 2',
        description: 'Second concert',
        totalSeats: 80,
        reservedSeats: 10,
        availableSeats: 70,
      },
    ]);
    historyMock.mockResolvedValue([
      { id: 'h1', action: 'RESERVE' },
      { id: 'h2', action: 'CANCEL' },
    ]);
    createMock.mockResolvedValue({
      id: 'concert-3',
      name: 'New Concert',
      description: 'Brand new',
      totalSeats: 50,
      reservedSeats: 0,
      availableSeats: 50,
    });
    deleteMock.mockResolvedValue({ message: 'Deleted' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loads concerts and displays KPI cards', async () => {
    render(<Dashboard />);

    await waitFor(() => expect(concertsMock).toHaveBeenCalled());

    expect(await screen.findByText(/concert 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/concert 2/i)).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('creates a new concert through the form', async () => {
    const user = userEvent.setup({ delay: null });
    render(<Dashboard />);

    await waitFor(() => expect(concertsMock).toHaveBeenCalled());

    await user.click(screen.getByRole('button', { name: /create/i }));

    await user.type(screen.getByLabelText(/concert name/i), ' New Concert ');
    await user.type(screen.getByLabelText(/total of seat/i), '50');
    await user.type(screen.getByLabelText(/description/i), 'Brand new');

    await user.click(screen.getByRole('button', { name: /save/i }));

    await waitFor(() =>
      expect(createMock).toHaveBeenCalledWith({
        name: 'New Concert',
        description: 'Brand new',
        totalSeats: 50,
      }),
    );
    await waitFor(() => {
      const matches = screen.getAllByText(/new concert/i);
      expect(matches.length).toBeGreaterThan(0);
    });
  });

  it('deletes a concert after confirmation', async () => {
    const user = userEvent.setup({ delay: null });
    render(<Dashboard />);

    await waitFor(() => expect(concertsMock).toHaveBeenCalled());

    const deleteButtons = await screen.findAllByRole('button', { name: /delete/i });
    await user.click(deleteButtons[0]);
    const confirmButton = await screen.findByRole('button', { name: /yes, delete/i });
    await user.click(confirmButton);

    await waitFor(() => expect(deleteMock).toHaveBeenCalledWith('concert-1'));
  });
});
