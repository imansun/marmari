import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosController } from './pos.controller';
import { PosService } from './pos.service';
import { PosSession } from './entities/pos-session.entity';
import { PosOrder } from './entities/pos-order.entity';
import { PosPayment } from './entities/pos-payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosSession, PosOrder, PosPayment])],
  controllers: [PosController],
  providers: [PosService],
  exports: [PosService],
})
export class PosModule {}
