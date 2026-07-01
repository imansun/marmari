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
import { AssetCategoriesService, AssetsService } from './fixed-assets.service';
import { CreateAssetCategoryDto } from './dto/create-asset-category.dto';
import { CreateAssetDto, UpdateAssetDto } from './dto/create-asset.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Asset Categories')
@ApiBearerAuth()
@Controller('asset-categories')
export class AssetCategoriesController {
  constructor(
    private readonly assetCategoriesService: AssetCategoriesService,
  ) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create an asset category' })
  create(@Body() dto: CreateAssetCategoryDto) {
    return this.assetCategoriesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all asset categories' })
  findAll() {
    return this.assetCategoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get asset category by ID' })
  findOne(@Param('id') id: string) {
    return this.assetCategoriesService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update asset category' })
  update(
    @Param('id') id: string,
    @Body() dto: Partial<CreateAssetCategoryDto>,
  ) {
    return this.assetCategoriesService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete asset category' })
  remove(@Param('id') id: string) {
    return this.assetCategoriesService.softDelete(id);
  }
}

@ApiTags('Fixed Assets')
@ApiBearerAuth()
@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a fixed asset' })
  create(@Body() dto: CreateAssetDto) {
    return this.assetsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all assets (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.assetsService.paginate(pagination, {
      relations: { category: true },
    });
  }

  @Get('category/:categoryId')
  @ApiOperation({ summary: 'Get assets by category' })
  findByCategory(@Param('categoryId') categoryId: string) {
    return this.assetsService.findByCategory(categoryId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get asset by ID' })
  findOne(@Param('id') id: string) {
    return this.assetsService.findOne(id);
  }

  @Get(':id/depreciation')
  @ApiOperation({ summary: 'Calculate depreciation for an asset' })
  calculateDepreciation(@Param('id') id: string) {
    return this.assetsService.calculateDepreciation(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update asset' })
  update(@Param('id') id: string, @Body() dto: UpdateAssetDto) {
    return this.assetsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete asset' })
  remove(@Param('id') id: string) {
    return this.assetsService.softDelete(id);
  }

  @Post(':id/depreciate')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Apply one month depreciation' })
  applyDepreciation(@Param('id') id: string) {
    return this.assetsService.applyDepreciation(id);
  }

  @Post(':id/dispose')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Dispose an asset' })
  dispose(@Param('id') id: string, @Body('disposedAt') disposedAt?: Date) {
    return this.assetsService.dispose(id, disposedAt);
  }
}
