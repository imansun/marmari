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
import { SubcontractingService } from './subcontracting.service';
import {
  CreateSubcontractOrderDto,
  UpdateSubcontractOrderDto,
  ReceiveSubcontractItemDto,
  ReturnMaterialDto,
} from './dto/create-subcontract.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Subcontracting')
@ApiBearerAuth()
@Controller('subcontracting')
export class SubcontractingController {
  constructor(private readonly subcontractingService: SubcontractingService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Create a subcontract order' })
  create(@Body() dto: CreateSubcontractOrderDto) {
    return this.subcontractingService.createOrder(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all subcontract orders' })
  findAll(@Query() pagination: PaginationDto) {
    return this.subcontractingService.paginate(pagination, {
      order: { createdAt: 'DESC' },
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get order by ID' })
  findOne(@Param('id') id: string) {
    return this.subcontractingService.findOne(id);
  }

  @Get('by-party/:partyId')
  @ApiOperation({ summary: 'Get orders by party' })
  findByParty(@Param('partyId') partyId: string) {
    return this.subcontractingService.getByParty(partyId);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Update order' })
  update(@Param('id') id: string, @Body() dto: UpdateSubcontractOrderDto) {
    return this.subcontractingService.updateOrder(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete order' })
  remove(@Param('id') id: string) {
    return this.subcontractingService.softDelete(id);
  }

  @Post(':id/confirm')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Confirm a draft order' })
  confirm(@Param('id') id: string) {
    return this.subcontractingService.confirm(id);
  }

  @Post(':id/start')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Start order (send materials)' })
  start(@Param('id') id: string) {
    return this.subcontractingService.start(id);
  }

  @Post(':id/receive')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Receive items from subcontractor' })
  receive(@Param('id') id: string, @Body() dtos: ReceiveSubcontractItemDto[]) {
    return this.subcontractingService.receiveItems(id, dtos);
  }

  @Post(':id/complete')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Complete order' })
  complete(@Param('id') id: string) {
    return this.subcontractingService.complete(id);
  }

  @Post(':id/cancel')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Cancel order' })
  cancel(@Param('id') id: string) {
    return this.subcontractingService.cancel(id);
  }

  @Post(':id/return-materials')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Return materials from subcontractor' })
  returnMaterials(@Param('id') id: string, @Body() dtos: ReturnMaterialDto[]) {
    return this.subcontractingService.returnMaterials(id, dtos);
  }
}
