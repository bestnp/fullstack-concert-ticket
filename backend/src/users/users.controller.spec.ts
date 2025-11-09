import { Test, type TestingModule } from '@nestjs/testing';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  const service = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: service }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    jest.clearAllMocks();
  });

  it('creates a user', async () => {
    const dto = { email: 'email@example.com', fullName: 'User' } as any;
    const created = { id: '1', ...dto } as any;
    service.create.mockResolvedValue(created);

    await expect(controller.create(dto)).resolves.toEqual(created);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('returns all users', async () => {
    const users = [{ id: '1' }];
    service.findAll.mockResolvedValue(users);

    await expect(controller.findAll()).resolves.toEqual(users);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('returns one user', async () => {
    const user = { id: 'user-1' } as any;
    service.findOne.mockResolvedValue(user);

    await expect(controller.findOne('user-1')).resolves.toEqual(user);
    expect(service.findOne).toHaveBeenCalledWith('user-1');
  });
});
