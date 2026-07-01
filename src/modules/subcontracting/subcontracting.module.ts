import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubcontractingController } from './subcontracting.controller';
import { SubcontractingService } from './subcontracting.service';
import { SubcontractOrder } from './entities/subcontract-order.entity';
import { SubcontractOrderItem } from './entities/subcontract-order-item.entity';
import { SubcontractMaterial } from './entities/subcontract-material.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubcontractOrder,
      SubcontractOrderItem,
      SubcontractMaterial,
    ]),
  ],
  controllers: [SubcontractingController],
  providers: [SubcontractingService],
  exports: [SubcontractingService],
})
export class SubcontractingModule {}
