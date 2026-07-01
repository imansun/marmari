import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountsService } from './accounts.service';
import { Account } from './entities/account.entity';
import { AccountType } from './entities/account-type.entity';
import { NotFoundException } from '@nestjs/common';

describe('AccountsService', () => {
  let service: AccountsService;
  let accountRepo: jest.Mocked<Repository<Account>>;

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

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountsService,
        { provide: getRepositoryToken(Account), useValue: mockRepo },
        {
          provide: getRepositoryToken(AccountType),
          useValue: { find: jest.fn(), findOne: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<AccountsService>(AccountsService);
    accountRepo = module.get(getRepositoryToken(Account));
  });

  describe('getBalance', () => {
    it('should return balance from account entity', async () => {
      accountRepo.findOne.mockResolvedValue({
        id: '1',
        debitBalance: 1000,
        creditBalance: 500,
        balance: 500,
      } as Account);
      const result = await service.getBalance('1');
      expect(result).toEqual({ debit: 1000, credit: 500, balance: 500 });
    });

    it('should throw if account not found', async () => {
      accountRepo.findOne.mockResolvedValue(null);
      await expect(service.getBalance('1')).rejects.toThrow(NotFoundException);
    });
  });

  describe('findAll', () => {
    it('should return all accounts', async () => {
      const accounts = [{ id: '1', code: '1001', name: 'Cash' }];
      accountRepo.find.mockResolvedValue(accounts as Account[]);
      const result = await service.findAll();
      expect(result).toEqual(accounts);
    });
  });
});
