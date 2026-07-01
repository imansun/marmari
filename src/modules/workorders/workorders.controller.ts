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
import { WorkordersService } from './workorders.service';
import {
  CreateWorkOrderDto,
  UpdateWorkOrderDto,
} from './dto/create-work-order.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Work Orders')
@ApiBearerAuth()
@Controller('work-orders')
export class WorkordersController {
  constructor(private readonly workordersService: WorkordersService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Create a work order' })
  create(@Body() dto: CreateWorkOrderDto) {
    return this.workordersService.createWorkOrder(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all work orders' })
  findAll(@Query() pagination: PaginationDto) {
    return this.workordersService.paginate(pagination, {
      order: { createdAt: 'DESC' },
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get work order by ID' })
  findOne(@Param('id') id: string) {
    return this.workordersService.findOne(id);
  }

  @Get('by-work-center/:workCenterId')
  @ApiOperation({ summary: 'Get orders by work center' })
  findByWorkCenter(@Param('workCenterId') workCenterId: string) {
    return this.workordersService.getByWorkCenter(workCenterId);
  }

  @Get('by-product/:productId')
  @ApiOperation({ summary: 'Get orders by product' })
  findByProduct(@Param('productId') productId: string) {
    return this.workordersService.getByProduct(productId);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Update work order' })
  update(@Param('id') id: string, @Body() dto: UpdateWorkOrderDto) {
    return this.workordersService.updateWorkOrder(
      id,
      dto as unknown as Record<string, unknown>,
    );
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete work order' })
  remove(@Param('id') id: string) {
    return this.workordersService.softDelete(id);
  }

  @Post(':id/plan')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Plan a draft order' })
  plan(@Param('id') id: string) {
    return this.workordersService.plan(id);
  }

  @Post(':id/start')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Start order' })
  start(@Param('id') id: string) {
    return this.workordersService.start(id);
  }

  @Post(':id/complete')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Complete order' })
  complete(
    @Param('id') id: string,
    @Body() dto: { producedQuantity?: number; defectiveQuantity?: number },
  ) {
    return this.workordersService.complete(id, dto);
  }

  @Post(':id/hold')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Put order on hold' })
  hold(@Param('id') id: string) {
    return this.workordersService.hold(id);
  }

  @Post(':id/resume')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Resume a held order' })
  resume(@Param('id') id: string) {
    return this.workordersService.resume(id);
  }

  @Post(':id/cancel')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Cancel order' })
  cancel(@Param('id') id: string) {
    return this.workordersService.cancel(id);
  }
}
