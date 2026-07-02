import {
  Injectable,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, LessThanOrEqual } from 'typeorm';
import { CrudService } from '../../core';
import { EventsService, DomainEvents } from '../../events';
import { Warehouse } from './entities/warehouse.entity';
import { Inventory } from './entities/inventory.entity';
import {
  InventoryDocument,
  InventoryDocumentItem,
  DocumentType,
  DocumentStatus,
} from './entities/inventory-document.entity';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class WarehousesService extends CrudService<Warehouse> {
  constructor(
    @InjectRepository(Warehouse)
    repository: Repository<Warehouse>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<Warehouse | null> {
    return this.repository.findOne({ where: { code } });
  }

  async findActive(): Promise<Warehouse[]> {
    return this.repository.find({ where: { isActive: true } });
  }
}

@Injectable()
export class InventoriesService extends CrudService<Inventory> {
  constructor(
    @InjectRepository(Inventory)
    repository: Repository<Inventory>,
  ) {
    super(repository);
  }

  async findByProduct(productId: string): Promise<Inventory[]> {
    return this.repository.find({
      where: { productId },
      relations: { warehouse: true },
    });
  }

  async findByWarehouse(warehouseId: string): Promise<Inventory[]> {
    return this.repository.find({
      where: { warehouseId },
      relations: { product: true },
    });
  }

  async getLowStock(): Promise<Inventory[]> {
    return this.repository.find({
      where: { quantity: LessThanOrEqual(0) },
      relations: { product: true, warehouse: true },
    });
  }
}

@Injectable()
export class InventoryDocumentsService extends CrudService<InventoryDocument> {
  constructor(
    @InjectRepository(InventoryDocument)
    repository: Repository<InventoryDocument>,
    @InjectRepository(InventoryDocumentItem)
    private readonly itemRepository: Repository<InventoryDocumentItem>,
    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly dataSource: DataSource,
    private readonly events: EventsService,
  ) {
    super(repository);
  }

  async createWithItems(dto: {
    documentNumber: string;
    documentType: DocumentType;
    warehouseId: string;
    targetWarehouseId?: string;
    date: Date;
    description?: string;
    items: { productId: string; quantity: number; unitPrice: number }[];
  }): Promise<InventoryDocument> {
    if (dto.documentType === DocumentType.TRANSFER && !dto.targetWarehouseId) {
      throw new BadRequestException(
        'Target warehouse is required for transfer documents',
      );
    }

    for (const item of dto.items) {
      const product = await this.productRepository.findOne({
        where: { id: item.productId },
      });
      if (!product) {
        throw new BadRequestException(`Product ${item.productId} not found`);
      }
    }

    const existing = await this.repository.findOne({
      where: { documentNumber: dto.documentNumber },
    });
    if (existing) {
      throw new ConflictException('Document number already exists');
    }

    const document = this.repository.create({
      documentNumber: dto.documentNumber,
      documentType: dto.documentType,
      warehouseId: dto.warehouseId,
      targetWarehouseId: dto.targetWarehouseId,
      date: dto.date,
      status: DocumentStatus.DRAFT,
      description: dto.description,
    });
    const saved = await this.repository.save(document);

    const items = dto.items.map((item) =>
      this.itemRepository.create({
        documentId: saved.id,
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        totalPrice: item.quantity * item.unitPrice,
      }),
    );
    await this.itemRepository.save(items);

    return this.findOne(saved.id);
  }

  async confirm(id: string): Promise<InventoryDocument> {
    const doc = await this.findOne(id);
    if (doc.status !== DocumentStatus.DRAFT) {
      throw new BadRequestException('Only draft documents can be confirmed');
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const invRepo = queryRunner.manager.getRepository(Inventory);

      for (const item of doc.items) {
        let inventory = await invRepo.findOne({
          where: { productId: item.productId, warehouseId: doc.warehouseId },
        });

        const qty = item.quantity;

        if (doc.documentType === DocumentType.RECEIPT) {
          if (!inventory) {
            inventory = invRepo.create({
              productId: item.productId,
              warehouseId: doc.warehouseId,
            });
          }
          inventory.quantity += qty;
        } else if (doc.documentType === DocumentType.ISSUE) {
          if (!inventory || inventory.quantity < qty) {
            throw new BadRequestException(
              `Insufficient stock for product ${item.productId} in warehouse ${doc.warehouseId}`,
            );
          }
          inventory.quantity -= qty;
        } else if (doc.documentType === DocumentType.TRANSFER) {
          if (!inventory || inventory.quantity < qty) {
            throw new BadRequestException(
              `Insufficient stock for product ${item.productId} in source warehouse`,
            );
          }
          inventory.quantity -= qty;
          await invRepo.save(inventory);

          let targetInv = await invRepo.findOne({
            where: {
              productId: item.productId,
              warehouseId: doc.targetWarehouseId!,
            },
          });
          if (!targetInv) {
            targetInv = invRepo.create({
              productId: item.productId,
              warehouseId: doc.targetWarehouseId!,
            });
          }
          targetInv.quantity += qty;
          await invRepo.save(targetInv);
        } else if (doc.documentType === DocumentType.ADJUSTMENT) {
          if (!inventory) {
            inventory = invRepo.create({
              productId: item.productId,
              warehouseId: doc.warehouseId,
            });
          }
          inventory.quantity = qty;
        }

        if (doc.documentType !== DocumentType.TRANSFER && inventory) {
          await invRepo.save(inventory);
        }
      }

      doc.status = DocumentStatus.CONFIRMED;
      await queryRunner.manager.save(doc);

      await queryRunner.commitTransaction();

      this.events.emit(DomainEvents.INVENTORY_CONFIRMED, {
        type: DomainEvents.INVENTORY_CONFIRMED,
        entityId: id,
        data: {
          documentNumber: doc.documentNumber,
          documentType: doc.documentType,
        },
      });

      return this.findOne(doc.id);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async cancel(id: string): Promise<InventoryDocument> {
    const doc = await this.findOne(id);
    if (doc.status !== DocumentStatus.DRAFT) {
      throw new BadRequestException('Only draft documents can be cancelled');
    }
    doc.status = DocumentStatus.CANCELLED;
    await this.repository.save(doc);
    this.events.emit(DomainEvents.INVENTORY_CANCELLED, {
      type: DomainEvents.INVENTORY_CANCELLED,
      entityId: id,
      data: { documentNumber: doc.documentNumber },
    });
    return this.findOne(doc.id);
  }

  async findOne(id: string): Promise<InventoryDocument> {
    const doc = await this.repository.findOne({
      where: { id },
      relations: {
        warehouse: true,
        targetWarehouse: true,
        items: { product: true },
      },
    });
    if (!doc) throw new BadRequestException('Document not found');
    return doc;
  }
}
