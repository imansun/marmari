import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ForbiddenException } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { Voucher, VoucherState } from './entities/voucher.entity';
import { VoucherItem } from './entities/voucher-item.entity';
import { VoucherType } from './entities/voucher-type.entity';

describe('VouchersService', () => {
  let service: VouchersService;
  let voucherRepo: jest.Mocked<any>;

  const mockVoucher = {
    id: '1',
    code: 'VCH-001',
    date: new Date(),
    state: VoucherState.DRAFT,
    voucherTypeId: '1',
    description: 'Test',
    createdById: '1',
    items: [
      { id: '1', accountId: '1', debit: 1000, credit: 0, description: 'item' },
    ],
  };

  beforeEach(async () => {
    const mockRepo = {
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      findAndCount: jest.fn(),
    };

    const mockDataSource = {
      createQueryRunner: jest.fn().mockReturnValue({
        connect: jest.fn(),
        startTransaction: jest.fn(),
        commitTransaction: jest.fn(),
        rollbackTransaction: jest.fn(),
        release: jest.fn(),
        manager: {
          save: jest.fn(),
        },
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VouchersService,
        { provide: getRepositoryToken(Voucher), useValue: mockRepo },
        {
          provide: getRepositoryToken(VoucherItem),
          useValue: { create: jest.fn(), save: jest.fn(), delete: jest.fn() },
        },
        {
          provide: getRepositoryToken(VoucherType),
          useValue: {
            findOne: jest
              .fn()
              .mockResolvedValue({ id: '1', name: 'General', code: 'GEN' }),
          },
        },
        { provide: DataSource, useValue: mockDataSource },
      ],
    }).compile();

    service = module.get<VouchersService>(VouchersService);
    voucherRepo = module.get(getRepositoryToken(Voucher));
  });

  describe('confirm', () => {
    it('should transition draft to confirmed', async () => {
      voucherRepo.findOne.mockResolvedValue({
        ...mockVoucher,
        state: VoucherState.DRAFT,
      });
      voucherRepo.save.mockImplementation(async (v: any) => v);

      const result = await service.confirm('1');
      expect(result.state).toBe(VoucherState.CONFIRMED);
    });

    it('should throw if not in draft status', async () => {
      voucherRepo.findOne.mockResolvedValue({
        ...mockVoucher,
        state: VoucherState.CONFIRMED,
      });
      await expect(service.confirm('1')).rejects.toThrow(ForbiddenException);
    });
  });

  describe('approve', () => {
    it('should transition confirmed to approved', async () => {
      voucherRepo.findOne.mockResolvedValue({
        ...mockVoucher,
        state: VoucherState.CONFIRMED,
      });
      voucherRepo.save.mockImplementation(async (v: any) => v);

      const result = await service.approve('1');
      expect(result.state).toBe(VoucherState.APPROVED);
    });

    it('should throw if not in confirmed status', async () => {
      voucherRepo.findOne.mockResolvedValue({
        ...mockVoucher,
        state: VoucherState.DRAFT,
      });
      await expect(service.approve('1')).rejects.toThrow(ForbiddenException);
    });
  });
});
