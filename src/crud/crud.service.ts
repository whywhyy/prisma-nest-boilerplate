import { Injectable } from '@nestjs/common';
import { CRUDRepository } from './crud.repository';
import { User } from 'prisma/prisma-client';

@Injectable()
export class CRUDService {
  constructor(private readonly repository: CRUDRepository) {}

  async createUser(): Promise<User> {
    return await this.repository.createUser();
  }
}
