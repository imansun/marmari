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
import { SalesOrdersService } from './sales-orders.service';
import {
  CreateSalesOrderDto,
  UpdateSalesOrderDto,
} from './dto/create-sales-order.dto';
import { ShipSalesOrderDto } from './dto/ship-sales-order.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Sales Orders')
@ApiBearerAuth()
@Controller('sales-orders')
export class SalesOrdersController {
  constructor(private readonly salesOrdersService: SalesOrdersService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.SALES)
  @ApiOperation({ summary: 'Create a sales order with items' })
  create(@Body() dto: CreateSalesOrderDto) {
    return this.salesOrdersService.createWithItems(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sales orders (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.salesOrdersService.paginate(pagination, {
      relations: { customer: true, warehouse: true },
    });
  }

  @Get('customer/:customerId')
  @ApiOperation({ summary: 'Get sales orders by customer' })
  findByCustomer(@Param('customerId') customerId: string) {
    return this.salesOrdersService.findByCustomer(customerId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get sales order by ID' })
  findOne(@Param('id') id: string) {
    return this.salesOrdersService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.SALES)
  @ApiOperation({ summary: 'Update sales order details' })
  update(@Param('id') id: string, @Body() dto: UpdateSalesOrderDto) {
    return this.salesOrdersService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete sales order' })
  remove(@Param('id') id: string) {
    return this.salesOrdersService.softDelete(id);
  }

  @Post(':id/confirm')
  @Roles(UserRole.ADMIN, UserRole.SALES)
  @ApiOperation({ summary: 'Confirm a draft sales order' })
  confirm(@Param('id') id: string) {
    return this.salesOrdersService.confirm(id);
  }

  @Post(':id/ship')
  @Roles(UserRole.ADMIN, UserRole.SALES, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Ship items (deduct stock)' })
  ship(@Param('id') id: string, @Body() dto: ShipSalesOrderDto) {
    return this.salesOrdersService.shipItems(id, dto.items);
  }

  @Post(':id/cancel')
  @Roles(UserRole.ADMIN, UserRole.SALES)
  @ApiOperation({ summary: 'Cancel a sales order' })
  cancel(@Param('id') id: string) {
    return this.salesOrdersService.cancel(id);
  }
}
