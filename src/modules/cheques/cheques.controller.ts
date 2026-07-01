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
import { ChequesService } from './cheques.service';
import { CreateChequeDto, UpdateChequeDto } from './dto/create-cheque.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';
import { ChequeStatus } from './entities/cheque.entity';

@ApiTags('Cheques')
@ApiBearerAuth()
@Controller('cheques')
export class ChequesController {
  constructor(private readonly chequesService: ChequesService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a cheque' })
  create(@Body() dto: CreateChequeDto) {
    return this.chequesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cheques (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.chequesService.paginate(pagination, {
      relations: { bankAccount: { bank: true } },
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get cheque by ID' })
  findOne(@Param('id') id: string) {
    return this.chequesService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update cheque details' })
  update(@Param('id') id: string, @Body() dto: UpdateChequeDto) {
    return this.chequesService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete cheque' })
  remove(@Param('id') id: string) {
    return this.chequesService.softDelete(id);
  }

  @Patch(':id/status')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update cheque status' })
  updateStatus(@Param('id') id: string, @Body('status') status: ChequeStatus) {
    return this.chequesService.updateStatus(id, status);
  }
}
