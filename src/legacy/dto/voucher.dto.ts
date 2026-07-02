import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LegacyVoucherDto {
  @ApiProperty() voucherID: number;
  @ApiProperty() ledgerRef: number;
  @ApiProperty() fiscalYearRef: number;
  @ApiProperty() branchRef: number;
  @ApiPropertyOptional() number?: number;
  @ApiProperty() sequence: number;
  @ApiProperty() dailyNumber: number;
  @ApiPropertyOptional() auxiliaryNumber?: string;
  @ApiProperty() date: Date;
  @ApiProperty() voucherTypeRef: number;
  @ApiProperty() creator: number;
  @ApiProperty() creationDate: Date;
  @ApiProperty() lastModifier: number;
  @ApiProperty() lastModificationDate: Date;
  @ApiPropertyOptional() description?: string;
  @ApiPropertyOptional() descriptionEn?: string;
  @ApiProperty() state: number;
  @ApiProperty() isTemporary: boolean;
  @ApiProperty() isCurrencyBased: boolean;
  @ApiProperty() isExternal: boolean;
  @ApiPropertyOptional() referenceNumber?: number;
  @ApiProperty() showCurrencyFields: boolean;
  @ApiProperty() isReadonly: boolean;
}

export class LegacyVoucherItemDto {
  @ApiProperty() voucherItemID: number;
  @ApiProperty() voucherRef: number;
  @ApiProperty() branchRef: number;
  @ApiProperty() rowNumber: number;
  @ApiProperty() accountGroupRef: number;
  @ApiProperty() glRef: number;
  @ApiProperty() slRef: number;
  @ApiProperty() slCode: string;
  @ApiPropertyOptional() debit?: string;
  @ApiPropertyOptional() credit?: string;
  @ApiPropertyOptional() description?: string;
  @ApiPropertyOptional() descriptionEn?: string;
  @ApiPropertyOptional() followUpNumber?: string;
  @ApiPropertyOptional() followUpDate?: Date;
  @ApiPropertyOptional() quantity?: string;
  @ApiPropertyOptional() partyRef?: number;
}

export class LegacyVoucherTypeDto {
  @ApiProperty() voucherTypeID: number;
  @ApiPropertyOptional() code?: number;
  @ApiProperty() title: string;
  @ApiPropertyOptional() titleEn?: string;
  @ApiPropertyOptional() description?: string;
  @ApiProperty() isStatic: boolean;
  @ApiPropertyOptional() ownerSystem?: string;
}
