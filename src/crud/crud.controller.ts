import { Controller, Get, HttpCode } from '@nestjs/common';
import { CRUDService } from './crud.service';
import { User } from 'prisma/prisma-client';
import { NOTFoundException, ForbiddenException } from '../common/errors';

@Controller('/crud')
export class CRUDController {
  constructor(private readonly crudService: CRUDService) {}

  @HttpCode(201)
  @Get('create')
  async createUser(): Promise<User> {
    return this.crudService.createUser();
  }

  @Get('notfound')
  async notFound(): Promise<string> {
    throw new NOTFoundException();
  }
  @Get('forbidden')
  async forbidden(): Promise<string> {
    throw new ForbiddenException();
  }
}
