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
import { ContractsService } from './contracts.service';
import {
  CreateContractDto,
  UpdateContractDto,
} from './dto/create-contract.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Contracts')
@ApiBearerAuth()
@Controller('contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Create a contract with items' })
  create(@Body() dto: CreateContractDto) {
    return this.contractsService.createWithItems(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all contracts (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.contractsService.paginate(pagination, {
      relations: { party: true },
    });
  }

  @Get('party/:partyId')
  @ApiOperation({ summary: 'Get contracts by party' })
  findByParty(@Param('partyId') partyId: string) {
    return this.contractsService.findByParty(partyId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get contract by ID' })
  findOne(@Param('id') id: string) {
    return this.contractsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Update contract details' })
  update(@Param('id') id: string, @Body() dto: UpdateContractDto) {
    return this.contractsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete contract' })
  remove(@Param('id') id: string) {
    return this.contractsService.softDelete(id);
  }

  @Post(':id/activate')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Activate a draft contract' })
  activate(@Param('id') id: string) {
    return this.contractsService.activate(id);
  }

  @Post(':id/complete')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Complete an active contract' })
  complete(@Param('id') id: string) {
    return this.contractsService.complete(id);
  }

  @Post(':id/terminate')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Terminate a contract' })
  terminate(@Param('id') id: string) {
    return this.contractsService.terminate(id);
  }

  @Post(':id/cancel')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Cancel a contract' })
  cancel(@Param('id') id: string) {
    return this.contractsService.cancel(id);
  }
}
