import { NotFoundException } from '@nestjs/common';

import { createPrismaMock, type PrismaMock } from '../../test/mocks/prisma.mock';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let prisma: PrismaMock;
  let service: UsersService;

  beforeEach(() => {
    prisma = createPrismaMock();
    service = new UsersService(prisma as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('creates a user with default role', async () => {
    const dto = { email: 'email@example.com', fullName: 'User Name' };
    const expected = { id: '1', role: 'USER' } as any;
    prisma.user.create.mockResolvedValue(expected);

    await expect(service.create(dto)).resolves.toEqual(expected);
    expect(prisma.user.create).toHaveBeenCalledWith({
      data: { ...dto, role: expect.any(String) },
    });
  });

  it('returns all users ordered by creation date', async () => {
    const users = [{ id: '1' }, { id: '2' }] as any;
    prisma.user.findMany.mockResolvedValue(users);

    await expect(service.findAll()).resolves.toEqual(users);
    expect(prisma.user.findMany).toHaveBeenCalledWith({ orderBy: { createdAt: 'desc' } });
  });

  it('finds a user by id', async () => {
    const user = { id: 'user-1' } as any;
    prisma.user.findUnique.mockResolvedValue(user);

    await expect(service.findOne('user-1')).resolves.toEqual(user);
    expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 'user-1' } });
  });

  it('throws when user not found', async () => {
    prisma.user.findUnique.mockResolvedValue(null);

    await expect(service.findOne('missing')).rejects.toBeInstanceOf(NotFoundException);
  });
});
