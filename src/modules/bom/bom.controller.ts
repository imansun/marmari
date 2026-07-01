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
import { BomService } from './bom.service';
import { CreateBomDto, UpdateBomDto } from './dto/create-bom.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('BOM')
@ApiBearerAuth()
@Controller('bom')
export class BomController {
  constructor(private readonly bomService: BomService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Create a BOM with items' })
  create(@Body() dto: CreateBomDto) {
    return this.bomService.createBom(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all BOMs' })
  findAll(@Query() pagination: PaginationDto) {
    return this.bomService.paginate(pagination, {
      order: { createdAt: 'DESC' },
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get BOM by ID' })
  findOne(@Param('id') id: string) {
    return this.bomService.findOne(id);
  }

  @Get(':id/cost')
  @ApiOperation({ summary: 'Get BOM cost breakdown' })
  getCost(@Param('id') id: string) {
    return this.bomService.getCost(id);
  }

  @Get('product/:productId')
  @ApiOperation({ summary: 'Get BOMs by product' })
  findByProduct(@Param('productId') productId: string) {
    return this.bomService.findByProduct(productId);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Update BOM' })
  update(@Param('id') id: string, @Body() dto: UpdateBomDto) {
    return this.bomService.updateBom(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete BOM' })
  remove(@Param('id') id: string) {
    return this.bomService.softDelete(id);
  }

  @Post(':id/activate')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Activate a draft BOM' })
  activate(@Param('id') id: string) {
    return this.bomService.activate(id);
  }

  @Post(':id/deactivate')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Deactivate an active BOM' })
  deactivate(@Param('id') id: string) {
    return this.bomService.deactivate(id);
  }

  @Post(':id/archive')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Archive a BOM' })
  archive(@Param('id') id: string) {
    return this.bomService.archive(id);
  }
}
