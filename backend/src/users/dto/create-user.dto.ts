import { Role } from '../../../generated/prisma';

export class CreateUserDto {
  email!: string;
  fullName!: string;
  role?: Role;
}

