import { Repository } from 'typeorm';
import { CrudService } from './crud.service';
import { NotFoundException } from '@nestjs/common';

class TestEntity {
  id!: string;
  name!: string;
}

class ConcreteCrudService extends CrudService<TestEntity> {
  constructor(repo: Repository<TestEntity>) {
    super(repo);
  }
}

describe('CrudService', () => {
  let service: ConcreteCrudService;
  let repo: jest.Mocked<Repository<TestEntity>>;

  beforeEach(() => {
    repo = {
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      softDelete: jest.fn(),
      findAndCount: jest.fn(),
    } as unknown as jest.Mocked<Repository<TestEntity>>;
    service = new ConcreteCrudService(repo);
  });

  describe('findAll', () => {
    it('should return all entities', async () => {
      const expected = [{ id: '1', name: 'test' }];
      repo.find.mockResolvedValue(expected);
      const result = await service.findAll();
      expect(result).toEqual(expected);
    });
  });

  describe('findOne', () => {
    it('should return an entity if found', async () => {
      const expected = { id: '1', name: 'test' };
      repo.findOne.mockResolvedValue(expected);
      const result = await service.findOne('1');
      expect(result).toEqual(expected);
    });

    it('should throw NotFoundException if not found', async () => {
      repo.findOne.mockResolvedValue(null);
      await expect(service.findOne('1')).rejects.toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should create and return entity', async () => {
      const dto = { name: 'new' };
      const created = { id: '1', ...dto };
      repo.create.mockReturnValue(created);
      repo.save.mockResolvedValue(created);
      const result = await service.create(dto);
      expect(result).toEqual(created);
    });
  });

  describe('update', () => {
    it('should update and return entity', async () => {
      const updated = { id: '1', name: 'updated' };
      repo.update.mockResolvedValue({
        affected: 1,
        raw: {},
        generatedMaps: [],
      });
      repo.findOne.mockResolvedValue(updated);
      const result = await service.update('1', { name: 'updated' });
      expect(result).toEqual(updated);
      expect(repo.update).toHaveBeenCalledWith('1', { name: 'updated' });
    });
  });

  describe('remove', () => {
    it('should delete entity', async () => {
      repo.delete.mockResolvedValue({ affected: 1, raw: {} });
      await service.remove('1');
      expect(repo.delete).toHaveBeenCalledWith('1');
    });

    it('should throw if not found', async () => {
      repo.delete.mockResolvedValue({ affected: 0, raw: {} });
      await expect(service.remove('1')).rejects.toThrow(NotFoundException);
    });
  });

  describe('paginate', () => {
    it('should return paginated results', async () => {
      const data = [{ id: '1', name: 'test' }];
      repo.findAndCount.mockResolvedValue([data, 1]);
      const result = await service.paginate({ page: 1, limit: 20 });
      expect(result.data).toEqual(data);
      expect(result.meta.total).toBe(1);
      expect(result.meta.page).toBe(1);
    });
  });
});
