import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AssetCategoriesController,
  AssetsController,
} from './fixed-assets.controller';
import { AssetCategoriesService, AssetsService } from './fixed-assets.service';
import { Asset } from './entities/asset.entity';
import { AssetCategory } from './entities/asset-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asset, AssetCategory])],
  controllers: [AssetCategoriesController, AssetsController],
  providers: [AssetCategoriesService, AssetsService],
  exports: [AssetCategoriesService, AssetsService],
})
export class FixedAssetsModule {}
