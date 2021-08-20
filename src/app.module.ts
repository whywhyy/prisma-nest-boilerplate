import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CRUDModule } from './crud/crud.module';
@Module({
  imports: [PrismaModule, CRUDModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
