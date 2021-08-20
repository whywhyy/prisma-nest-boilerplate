import { Module } from '@nestjs/common';
import { CRUDController } from './crud.controller';
import { CRUDRepository } from './crud.repository';
import { CRUDService } from './crud.service';
@Module({
  controllers: [CRUDController],
  providers: [CRUDService, CRUDRepository],
})
export class CRUDModule {}
