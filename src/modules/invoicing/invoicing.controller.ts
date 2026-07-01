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
import { InvoicingService } from './invoicing.service';
import { CreateInvoiceDto, UpdateInvoiceDto } from './dto/create-invoice.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Invoices')
@ApiBearerAuth()
@Controller('invoices')
export class InvoicingController {
  constructor(private readonly invoicingService: InvoicingService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE, UserRole.SALES)
  @ApiOperation({ summary: 'Create an invoice with items' })
  create(@Body() dto: CreateInvoiceDto) {
    return this.invoicingService.createWithItems(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all invoices (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.invoicingService.paginate(pagination, {
      relations: { party: true },
    });
  }

  @Get('party/:partyId')
  @ApiOperation({ summary: 'Get invoices by party' })
  findByParty(@Param('partyId') partyId: string) {
    return this.invoicingService.findByParty(partyId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get invoice by ID' })
  findOne(@Param('id') id: string) {
    return this.invoicingService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update invoice details' })
  update(@Param('id') id: string, @Body() dto: UpdateInvoiceDto) {
    return this.invoicingService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete invoice' })
  remove(@Param('id') id: string) {
    return this.invoicingService.softDelete(id);
  }

  @Post(':id/issue')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Issue a draft invoice' })
  issue(@Param('id') id: string) {
    return this.invoicingService.issue(id);
  }

  @Post(':id/paid')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Mark invoice as paid' })
  markPaid(@Param('id') id: string) {
    return this.invoicingService.markPaid(id);
  }

  @Post(':id/cancel')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Cancel an invoice' })
  cancel(@Param('id') id: string) {
    return this.invoicingService.cancel(id);
  }
}
