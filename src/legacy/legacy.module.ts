import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LegacyAccountController } from './controllers/legacy-account.controller';
import { LegacyVoucherController } from './controllers/legacy-voucher.controller';
import { LegacyProductController } from './controllers/legacy-product.controller';
import { LegacyPartyController } from './controllers/legacy-party.controller';
import { LegacyUserController } from './controllers/legacy-user.controller';
import { LegacyAccountService } from './services/legacy-account.service';
import { LegacyVoucherService } from './services/legacy-voucher.service';
import { LegacyProductService } from './services/legacy-product.service';
import { LegacyPartyService } from './services/legacy-party.service';
import { LegacyUserService } from './services/legacy-user.service';
import { legacyEntities } from './entities/all-legacy-entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([...legacyEntities]),
  ],
  controllers: [
    LegacyAccountController,
    LegacyVoucherController,
    LegacyProductController,
    LegacyPartyController,
    LegacyUserController,
  ],
  providers: [
    LegacyAccountService,
    LegacyVoucherService,
    LegacyProductService,
    LegacyPartyService,
    LegacyUserService,
  ],
  exports: [
    LegacyAccountService,
    LegacyVoucherService,
    LegacyProductService,
    LegacyPartyService,
    LegacyUserService,
  ],
})
export class LegacyModule {}
