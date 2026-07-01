import {
  Injectable,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import {
  Asset,
  AssetStatus,
  DepreciationMethod,
} from './entities/asset.entity';
import { AssetCategory } from './entities/asset-category.entity';

@Injectable()
export class AssetCategoriesService extends CrudService<AssetCategory> {
  constructor(
    @InjectRepository(AssetCategory)
    repository: Repository<AssetCategory>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<AssetCategory | null> {
    return this.repository.findOne({ where: { code } });
  }
}

@Injectable()
export class AssetsService extends CrudService<Asset> {
  constructor(
    @InjectRepository(Asset)
    repository: Repository<Asset>,
  ) {
    super(repository);
  }

  async create(dto: {
    code: string;
    name: string;
    description?: string;
    categoryId: string;
    purchaseDate: Date;
    purchasePrice: number;
    salvageValue?: number;
    usefulLife?: number;
    depreciationMethod?: DepreciationMethod;
    status?: AssetStatus;
  }): Promise<Asset> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing) throw new ConflictException('Asset code already exists');

    const category = await this.repository.manager.findOne(AssetCategory, {
      where: { id: dto.categoryId },
    });
    if (!category) throw new BadRequestException('Category not found');

    const usefulLife = dto.usefulLife ?? category.defaultUsefulLife;
    const salvageValue = dto.salvageValue ?? 0;
    const currentValue = dto.purchasePrice - salvageValue;

    const asset = this.repository.create({
      code: dto.code,
      name: dto.name,
      description: dto.description,
      categoryId: dto.categoryId,
      purchaseDate: dto.purchaseDate,
      purchasePrice: dto.purchasePrice,
      salvageValue,
      usefulLife,
      depreciationMethod:
        dto.depreciationMethod ?? DepreciationMethod.STRAIGHT_LINE,
      accumulatedDepreciation: 0,
      currentValue,
      status: dto.status ?? AssetStatus.ACTIVE,
    });
    return this.repository.save(asset);
  }

  async calculateDepreciation(id: string): Promise<{
    monthlyDepreciation: number;
    accumulatedDepreciation: number;
    currentValue: number;
  }> {
    const asset = await this.findOne(id);
    if (asset.status !== AssetStatus.ACTIVE) {
      throw new BadRequestException('Only active assets can be depreciated');
    }

    const depreciableAmount =
      Number(asset.purchasePrice) - Number(asset.salvageValue);
    let monthlyDepreciation = 0;

    if (asset.depreciationMethod === DepreciationMethod.STRAIGHT_LINE) {
      monthlyDepreciation = depreciableAmount / asset.usefulLife;
    } else {
      const rate = 2 / asset.usefulLife;
      const remainingValue = Number(asset.currentValue);
      monthlyDepreciation = remainingValue * rate;
    }

    const newAccumulated =
      Number(asset.accumulatedDepreciation) + monthlyDepreciation;
    const newCurrentValue = Math.max(
      0,
      Number(asset.purchasePrice) - newAccumulated,
    );

    return {
      monthlyDepreciation,
      accumulatedDepreciation: newAccumulated,
      currentValue: newCurrentValue,
    };
  }

  async applyDepreciation(id: string): Promise<Asset> {
    const data = await this.calculateDepreciation(id);
    await this.repository.update(id, {
      accumulatedDepreciation: data.accumulatedDepreciation,
      currentValue: data.currentValue,
    });

    if (data.currentValue <= 0) {
      await this.repository.update(id, {
        status: AssetStatus.FULLY_DEPRECIATED,
      });
    }

    return this.findOne(id);
  }

  async dispose(id: string, disposedAt?: Date): Promise<Asset> {
    const asset = await this.findOne(id);
    if (asset.status === AssetStatus.DISPOSED) {
      throw new BadRequestException('Asset already disposed');
    }
    await this.repository.update(id, {
      status: AssetStatus.DISPOSED,
      disposedAt: disposedAt ?? new Date(),
    });
    return this.findOne(id);
  }

  async findByCategory(categoryId: string): Promise<Asset[]> {
    return this.repository.find({
      where: { categoryId },
      relations: { category: true },
    });
  }
}
