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
import { PosService } from './pos.service';
import {
  CreatePosSessionDto,
  CreatePosOrderDto,
  ClosePosSessionDto,
} from './dto/create-pos.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('POS')
@ApiBearerAuth()
@Controller('pos')
export class PosController {
  constructor(private readonly posService: PosService) {}

  @Post('sessions')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Open a POS session' })
  createSession(@Body() dto: CreatePosSessionDto) {
    return this.posService.createSession(dto);
  }

  @Get('sessions')
  @ApiOperation({ summary: 'Get all sessions' })
  findAllSessions(@Query() pagination: PaginationDto) {
    return this.posService.paginate(pagination, {
      order: { openedAt: 'DESC' },
    });
  }

  @Get('sessions/open')
  @ApiOperation({ summary: 'Get open sessions' })
  getOpenSessions() {
    return this.posService.getOpenSessions();
  }

  @Get('sessions/:id')
  @ApiOperation({ summary: 'Get session by ID' })
  findSession(@Param('id') id: string) {
    return this.posService.findOne(id);
  }

  @Patch('sessions/:id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Update session' })
  updateSession(
    @Param('id') id: string,
    @Body() dto: Partial<CreatePosSessionDto>,
  ) {
    return this.posService.update(id, dto);
  }

  @Delete('sessions/:id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete session' })
  removeSession(@Param('id') id: string) {
    return this.posService.softDelete(id);
  }

  @Post('sessions/:id/close')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Close a POS session' })
  closeSession(@Param('id') id: string, @Body() dto: ClosePosSessionDto) {
    return this.posService.closeSession(id, dto);
  }

  @Get('sessions/:id/orders')
  @ApiOperation({ summary: 'Get orders for a session' })
  getSessionOrders(
    @Param('id') id: string,
    @Query() pagination: PaginationDto,
  ) {
    return this.posService.getSessionOrders(
      id,
      pagination.page,
      pagination.limit,
    );
  }

  @Post('orders')
  @Roles(UserRole.ADMIN, UserRole.MANAGER, UserRole.SALES)
  @ApiOperation({ summary: 'Create a POS order (with payment)' })
  createOrder(@Body() dto: CreatePosOrderDto) {
    return this.posService.createOrder(dto);
  }

  @Get('orders')
  @ApiOperation({ summary: 'Get all orders' })
  findAllOrders(@Query() pagination: PaginationDto) {
    return this.posService.paginateOrders(pagination.page, pagination.limit, {
      order: { createdAt: 'DESC' },
    });
  }

  @Get('orders/:id')
  @ApiOperation({ summary: 'Get order by ID' })
  findOrder(@Param('id') id: string) {
    return this.posService.findOrder(id);
  }

  @Get('orders/:id/payments')
  @ApiOperation({ summary: 'Get payments for an order' })
  getOrderPayments(@Param('id') id: string) {
    return this.posService.getOrderPayments(id);
  }

  @Post('orders/:id/void')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Void a paid order' })
  voidOrder(@Param('id') id: string) {
    return this.posService.voidOrder(id);
  }

  @Post('orders/:id/refund')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Refund a paid order' })
  refundOrder(@Param('id') id: string) {
    return this.posService.refundOrder(id);
  }
}
