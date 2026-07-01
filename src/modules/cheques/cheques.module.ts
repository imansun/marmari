import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChequesController } from './cheques.controller';
import { ChequesService } from './cheques.service';
import { Cheque } from './entities/cheque.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cheque])],
  controllers: [ChequesController],
  providers: [ChequesService],
  exports: [ChequesService],
})
export class ChequesModule {}
