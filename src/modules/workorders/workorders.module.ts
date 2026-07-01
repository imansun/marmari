import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkordersController } from './workorders.controller';
import { WorkordersService } from './workorders.service';
import { WorkOrder } from './entities/work-order.entity';
import { WorkOrderOperation } from './entities/work-order-operation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkOrder, WorkOrderOperation])],
  controllers: [WorkordersController],
  providers: [WorkordersService],
  exports: [WorkordersService],
})
export class WorkordersModule {}
