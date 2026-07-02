import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseEnumPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { GuaranteesService } from './guarantees.service';
import {
  CreateGuaranteeDto,
  UpdateGuaranteeDto,
} from './dto/create-guarantee.dto';
import { GuaranteeStatus } from './entities/guarantee.entity';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Guarantees')
@ApiBearerAuth()
@Controller('guarantees')
export class GuaranteesController {
  constructor(private readonly guaranteesService: GuaranteesService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a guarantee' })
  create(@Body() dto: CreateGuaranteeDto) {
    return this.guaranteesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all guarantees' })
  findAll() {
    return this.guaranteesService.findAll();
  }

  @Get('expiring')
  @ApiOperation({ summary: 'Get expiring guarantees' })
  findExpiring() {
    return this.guaranteesService.findExpiring();
  }

  @Get('by-bank/:bankId')
  @ApiOperation({ summary: 'Get guarantees by bank' })
  findByBank(@Param('bankId') bankId: string) {
    return this.guaranteesService.findByBank(bankId);
  }

  @Get('by-status/:status')
  @ApiOperation({ summary: 'Get guarantees by status' })
  findByStatus(
    @Param('status', new ParseEnumPipe(GuaranteeStatus)) status: GuaranteeStatus,
  ) {
    return this.guaranteesService.findByStatus(status);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get guarantee by ID' })
  findOne(@Param('id') id: string) {
    return this.guaranteesService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update guarantee' })
  update(@Param('id') id: string, @Body() dto: UpdateGuaranteeDto) {
    return this.guaranteesService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete guarantee' })
  remove(@Param('id') id: string) {
    return this.guaranteesService.softDelete(id);
  }
}
