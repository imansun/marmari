import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BomController } from './bom.controller';
import { BomService } from './bom.service';
import { BOM } from './entities/bom.entity';
import { BOMItem } from './entities/bom-item.entity';
import { Product } from '../products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BOM, BOMItem, Product])],
  controllers: [BomController],
  providers: [BomService],
  exports: [BomService],
})
export class BomModule {}
