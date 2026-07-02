import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YearEndClosingController } from './year-end-closing.controller';
import { YearEndClosingService } from './year-end-closing.service';
import { YearEndClosing } from './entities/year-end-closing.entity';
import { YearEndClosingAccount } from './entities/year-end-closing-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([YearEndClosing, YearEndClosingAccount])],
  controllers: [YearEndClosingController],
  providers: [YearEndClosingService],
  exports: [YearEndClosingService],
})
export class YearEndClosingModule {}
