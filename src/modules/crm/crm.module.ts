import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmController } from './crm.controller';
import { CrmService } from './crm.service';
import { Campaign } from './entities/campaign.entity';
import { Visit } from './entities/visit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign, Visit])],
  controllers: [CrmController],
  providers: [CrmService],
  exports: [CrmService],
})
export class CrmModule {}
