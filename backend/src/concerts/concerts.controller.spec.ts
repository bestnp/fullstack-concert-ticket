import { Test, type TestingModule } from '@nestjs/testing';

import { ConcertsController } from './concerts.controller';
import { ConcertsService } from './concerts.service';

describe('ConcertsController', () => {
  let controller: ConcertsController;
  const service = {
    create: jest.fn(),
    findAll: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcertsController],
      providers: [{ provide: ConcertsService, useValue: service }],
    }).compile();

    controller = module.get<ConcertsController>(ConcertsController);
    jest.clearAllMocks();
  });

  it('delegates create to service', async () => {
    const dto = { name: 'Concert', description: 'Desc', totalSeats: 100 } as any;
    const created = { id: '1', ...dto } as any;
    service.create.mockResolvedValue(created);

    await expect(controller.create(dto)).resolves.toEqual(created);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('retrieves all concerts (without userId)', async () => {
    const concerts = [{ id: '1' }] as any;
    service.findAll.mockResolvedValue(concerts);

    await expect(controller.findAll()).resolves.toEqual(concerts);
    expect(service.findAll).toHaveBeenCalledWith(undefined);
  });

  it('retrieves concerts filtered by userId', async () => {
    const concerts = [{ id: '1' }] as any;
    service.findAll.mockResolvedValue(concerts);

    await expect(controller.findAll('user-1')).resolves.toEqual(concerts);
    expect(service.findAll).toHaveBeenCalledWith('user-1');
  });

  it('removes a concert', async () => {
    service.remove.mockResolvedValue(undefined);

    await expect(controller.remove('concert-1')).resolves.toEqual({ message: 'Concert removed' });
    expect(service.remove).toHaveBeenCalledWith('concert-1');
  });
});
