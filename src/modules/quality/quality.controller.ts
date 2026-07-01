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
import { QualityService } from './quality.service';
import {
  CreateQualityCheckDto,
  UpdateQualityCheckDto,
} from './dto/create-quality.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Quality')
@ApiBearerAuth()
@Controller('quality')
export class QualityController {
  constructor(private readonly qualityService: QualityService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.MANAGER, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Create a quality check' })
  create(@Body() dto: CreateQualityCheckDto) {
    return this.qualityService.createCheck(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all quality checks' })
  findAll(@Query() pagination: PaginationDto) {
    return this.qualityService.paginate(pagination, {
      order: { checkDate: 'DESC' },
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get quality check by ID' })
  findOne(@Param('id') id: string) {
    return this.qualityService.findOne(id);
  }

  @Get('by-reference/:referenceType/:referenceId')
  @ApiOperation({ summary: 'Get checks by reference' })
  findByReference(
    @Param('referenceType') referenceType: string,
    @Param('referenceId') referenceId: string,
  ) {
    return this.qualityService.getByReference(referenceType, referenceId);
  }

  @Get('by-product/:productId')
  @ApiOperation({ summary: 'Get checks by product' })
  findByProduct(@Param('productId') productId: string) {
    return this.qualityService.getByProduct(productId);
  }

  @Get('by-inspector/:inspectorId')
  @ApiOperation({ summary: 'Get checks by inspector' })
  findByInspector(@Param('inspectorId') inspectorId: string) {
    return this.qualityService.getByInspector(inspectorId);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER, UserRole.INVENTORY)
  @ApiOperation({ summary: 'Update quality check' })
  update(@Param('id') id: string, @Body() dto: UpdateQualityCheckDto) {
    return this.qualityService.updateCheck(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete quality check' })
  remove(@Param('id') id: string) {
    return this.qualityService.softDelete(id);
  }
}
