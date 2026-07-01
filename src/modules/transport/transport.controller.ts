import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { TransportService } from './transport.service';
import { Transport } from './entities/transport.entity';
import { CreateTransportDto } from './dto/create-transport.dto';
import { UpdateTransportDto } from './dto/update-transport.dto';
import { Roles } from '../../common';

@ApiTags('Transport')
@ApiBearerAuth()
@Controller('transport')
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @Post()
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Create transport' })
  create(@Body() dto: CreateTransportDto): Promise<Transport> {
    return this.transportService.createTransport(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all transports' })
  findAll(): Promise<Transport[]> {
    return this.transportService.findAll();
  }

  @Get('in-transit')
  @ApiOperation({ summary: 'Get in-transit transports' })
  getInTransit(): Promise<Transport[]> {
    return this.transportService.getInTransit();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get transport by id' })
  findOne(@Param('id') id: string): Promise<Transport> {
    return this.transportService.findOne(id);
  }

  @Patch(':id/status')
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Update transport status (state machine)' })
  updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateTransportDto,
  ): Promise<Transport> {
    return this.transportService.updateTransport(id, dto);
  }
}
