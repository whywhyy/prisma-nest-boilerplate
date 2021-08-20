import { Injectable } from '@nestjs/common';
import { PrismaRepository } from '../prisma/prisma.repository';
import { User } from 'prisma/prisma-client';

@Injectable()
export class CRUDRepository {
  constructor(private readonly repository: PrismaRepository) {}
  async createUser(): Promise<User> {
    const userCount = await this.repository.user.count();
    const result = await this.repository.user.create({
      data: {
        email: 'abcd@' + userCount,
      },
    });
    return result;
  }
}
