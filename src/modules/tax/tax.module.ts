import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxController } from './tax.controller';
import { TaxTablesService } from './tax.service';
import { TaxTable } from './entities/tax-table.entity';
import { TaxTableItem } from './entities/tax-table-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaxTable, TaxTableItem])],
  controllers: [TaxController],
  providers: [TaxTablesService],
  exports: [TaxTablesService],
})
export class TaxModule {}
