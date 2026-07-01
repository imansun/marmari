import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  WarehousesController,
  InventoriesController,
  InventoryDocumentsController,
} from './inventory.controller';
import {
  WarehousesService,
  InventoriesService,
  InventoryDocumentsService,
} from './inventory.service';
import { Warehouse } from './entities/warehouse.entity';
import { Inventory } from './entities/inventory.entity';
import {
  InventoryDocument,
  InventoryDocumentItem,
} from './entities/inventory-document.entity';
import { Product } from '../products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Warehouse,
      Inventory,
      InventoryDocument,
      InventoryDocumentItem,
      Product,
    ]),
  ],
  controllers: [
    WarehousesController,
    InventoriesController,
    InventoryDocumentsController,
  ],
  providers: [WarehousesService, InventoriesService, InventoryDocumentsService],
  exports: [WarehousesService, InventoriesService, InventoryDocumentsService],
})
export class InventoryModule {}
