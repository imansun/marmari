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
import { PurchaseOrdersService } from './purchase-orders.service';
import {
  CreatePurchaseOrderDto,
  UpdatePurchaseOrderDto,
} from './dto/create-purchase-order.dto';
import { ReceivePurchaseOrderDto } from './dto/receive-purchase-order.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Purchase Orders')
@ApiBearerAuth()
@Controller('purchase-orders')
export class PurchaseOrdersController {
  constructor(private readonly purchaseOrdersService: PurchaseOrdersService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Create a purchase order with items' })
  create(@Body() dto: CreatePurchaseOrderDto) {
    return this.purchaseOrdersService.createWithItems(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all purchase orders (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.purchaseOrdersService.paginate(pagination, {
      relations: { supplier: true, warehouse: true },
    });
  }

  @Get('supplier/:supplierId')
  @ApiOperation({ summary: 'Get purchase orders by supplier' })
  findBySupplier(@Param('supplierId') supplierId: string) {
    return this.purchaseOrdersService.findBySupplier(supplierId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get purchase order by ID' })
  findOne(@Param('id') id: string) {
    return this.purchaseOrdersService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Update purchase order details' })
  update(@Param('id') id: string, @Body() dto: UpdatePurchaseOrderDto) {
    return this.purchaseOrdersService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete purchase order' })
  remove(@Param('id') id: string) {
    return this.purchaseOrdersService.softDelete(id);
  }

  @Post(':id/approve')
  @Roles(UserRole.ADMIN, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Approve a draft purchase order' })
  approve(@Param('id') id: string) {
    return this.purchaseOrdersService.approve(id);
  }

  @Post(':id/cancel')
  @Roles(UserRole.ADMIN, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Cancel a purchase order' })
  cancel(@Param('id') id: string) {
    return this.purchaseOrdersService.cancel(id);
  }

  @Post(':id/receive')
  @Roles(UserRole.ADMIN, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Receive items for a purchase order' })
  receive(@Param('id') id: string, @Body() dto: ReceivePurchaseOrderDto) {
    return this.purchaseOrdersService.receiveItems(id, dto.items);
  }
}
