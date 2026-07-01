import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { TransfersService } from './transfers.service';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Transfers')
@ApiBearerAuth()
@Controller('transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a transfer' })
  create(@Body() dto: CreateTransferDto) {
    return this.transfersService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all transfers (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.transfersService.paginate(pagination, {
      relations: { fromAccount: true, toAccount: true },
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get transfer by ID' })
  findOne(@Param('id') id: string) {
    return this.transfersService.findOne(id);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete transfer' })
  remove(@Param('id') id: string) {
    return this.transfersService.softDelete(id);
  }

  @Post(':id/execute')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Execute a pending transfer' })
  execute(@Param('id') id: string) {
    return this.transfersService.execute(id);
  }

  @Post(':id/cancel')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Cancel a pending transfer' })
  cancel(@Param('id') id: string) {
    return this.transfersService.cancel(id);
  }
}
