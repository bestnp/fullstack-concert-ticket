import { Role } from '@prisma/client';

export class CreateUserDto {
  email!: string;
  fullName!: string;
  role?: Role;
}

