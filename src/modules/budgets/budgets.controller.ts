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
import { BudgetsService } from './budgets.service';
import { CreateBudgetDto, UpdateBudgetDto } from './dto/create-budget.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Budgets')
@ApiBearerAuth()
@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a budget with items' })
  create(@Body() dto: CreateBudgetDto) {
    return this.budgetsService.createWithItems(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all budgets (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.budgetsService.paginate(pagination, {
      relations: { costCenter: true },
    });
  }

  @Get('fiscal-year/:year')
  @ApiOperation({ summary: 'Get budgets by fiscal year' })
  findByFiscalYear(@Param('year') year: string) {
    return this.budgetsService.findByFiscalYear(year);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get budget by ID' })
  findOne(@Param('id') id: string) {
    return this.budgetsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update budget' })
  update(@Param('id') id: string, @Body() dto: UpdateBudgetDto) {
    return this.budgetsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete budget' })
  remove(@Param('id') id: string) {
    return this.budgetsService.softDelete(id);
  }

  @Post(':id/activate')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Activate a draft budget' })
  activate(@Param('id') id: string) {
    return this.budgetsService.activate(id);
  }

  @Post(':id/close')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Close an active budget' })
  close(@Param('id') id: string) {
    return this.budgetsService.close(id);
  }
}
