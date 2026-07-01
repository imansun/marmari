import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import {
  WarehousesService,
  InventoriesService,
  InventoryDocumentsService,
} from './inventory.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import {
  CreateInventoryDto,
  UpdateInventoryDto,
} from './dto/create-inventory.dto';
import { CreateInventoryDocumentDto } from './dto/create-inventory-document.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Warehouses')
@ApiBearerAuth()
@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Create a warehouse' })
  create(@Body() dto: CreateWarehouseDto) {
    return this.warehousesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all warehouses' })
  findAll() {
    return this.warehousesService.findAll();
  }

  @Get('active')
  @ApiOperation({ summary: 'Get active warehouses' })
  findActive() {
    return this.warehousesService.findActive();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get warehouse by ID' })
  findOne(@Param('id') id: string) {
    return this.warehousesService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Update warehouse' })
  update(@Param('id') id: string, @Body() dto: Partial<CreateWarehouseDto>) {
    return this.warehousesService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete warehouse' })
  remove(@Param('id') id: string) {
    return this.warehousesService.softDelete(id);
  }
}

@ApiTags('Inventory')
@ApiBearerAuth()
@Controller('inventory')
export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Set initial inventory for product in warehouse' })
  create(@Body() dto: CreateInventoryDto) {
    return this.inventoriesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all inventory records (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.inventoriesService.paginate(pagination, {
      relations: { product: true, warehouse: true },
    });
  }

  @Get('low-stock')
  @ApiOperation({ summary: 'Get low stock items' })
  getLowStock() {
    return this.inventoriesService.getLowStock();
  }

  @Get('product/:productId')
  @ApiOperation({ summary: 'Get inventory by product across warehouses' })
  findByProduct(@Param('productId') productId: string) {
    return this.inventoriesService.findByProduct(productId);
  }

  @Get('warehouse/:warehouseId')
  @ApiOperation({ summary: 'Get inventory by warehouse' })
  findByWarehouse(@Param('warehouseId') warehouseId: string) {
    return this.inventoriesService.findByWarehouse(warehouseId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get inventory record by ID' })
  findOne(@Param('id') id: string) {
    return this.inventoriesService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Update min/max quantities' })
  update(@Param('id') id: string, @Body() dto: UpdateInventoryDto) {
    return this.inventoriesService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete inventory record' })
  remove(@Param('id') id: string) {
    return this.inventoriesService.softDelete(id);
  }
}

@ApiTags('Inventory Documents')
@ApiBearerAuth()
@Controller('inventory-documents')
export class InventoryDocumentsController {
  constructor(
    private readonly inventoryDocumentsService: InventoryDocumentsService,
  ) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.INVENTORY)
  @ApiOperation({
    summary: 'Create an inventory document (receipt/issue/transfer/adjustment)',
  })
  create(@Body() dto: CreateInventoryDocumentDto) {
    return this.inventoryDocumentsService.createWithItems(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all inventory documents (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.inventoryDocumentsService.paginate(pagination, {
      relations: { warehouse: true, targetWarehouse: true },
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get inventory document by ID' })
  findOne(@Param('id') id: string) {
    return this.inventoryDocumentsService.findOne(id);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete inventory document' })
  remove(@Param('id') id: string) {
    return this.inventoryDocumentsService.softDelete(id);
  }

  @Post(':id/confirm')
  @Roles(UserRole.ADMIN, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Confirm document and update stock' })
  confirm(@Param('id') id: string) {
    return this.inventoryDocumentsService.confirm(id);
  }

  @Post(':id/cancel')
  @Roles(UserRole.ADMIN, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Cancel a draft document' })
  cancel(@Param('id') id: string) {
    return this.inventoryDocumentsService.cancel(id);
  }
}
