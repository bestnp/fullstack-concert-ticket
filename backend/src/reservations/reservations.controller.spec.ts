import { Test, type TestingModule } from '@nestjs/testing';

import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';

describe('ReservationsController', () => {
  let controller: ReservationsController;
  const service = {
    reserve: jest.fn(),
    cancel: jest.fn(),
    historyByUser: jest.fn(),
    historyAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationsController],
      providers: [{ provide: ReservationsService, useValue: service }],
    }).compile();

    controller = module.get<ReservationsController>(ReservationsController);
    jest.clearAllMocks();
  });

  it('reserves a concert', async () => {
    const dto = { userId: 'user-1', concertId: 'concert-1' } as any;
    const result = { reservation: { id: 'r1' } } as any;
    service.reserve.mockResolvedValue(result);

    await expect(controller.reserve(dto)).resolves.toEqual(result);
    expect(service.reserve).toHaveBeenCalledWith(dto);
  });

  it('cancels a reservation', async () => {
    const dto = { userId: 'user-1', concertId: 'concert-1' } as any;
    const result = { reservation: { id: 'r1' } } as any;
    service.cancel.mockResolvedValue(result);

    await expect(controller.cancel(dto)).resolves.toEqual(result);
    expect(service.cancel).toHaveBeenCalledWith(dto);
  });

  it('returns history for a specific user', async () => {
    const history = [{ id: 'h1' }];
    service.historyByUser.mockResolvedValue(history);

    await expect(controller.history('user-1')).resolves.toEqual(history);
    expect(service.historyByUser).toHaveBeenCalledWith('user-1');
    expect(service.historyAll).not.toHaveBeenCalled();
  });

  it('returns global history when no userId provided', async () => {
    const history = [{ id: 'h1' }];
    service.historyAll.mockResolvedValue(history);

    await expect(controller.history(undefined)).resolves.toEqual(history);
    expect(service.historyByUser).not.toHaveBeenCalled();
    expect(service.historyAll).toHaveBeenCalled();
  });
});
