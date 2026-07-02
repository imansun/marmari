import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LegacyAccountDto {
  @ApiProperty() accountID: number;
  @ApiProperty() name: string;
  @ApiPropertyOptional() secondTitle?: string;
  @ApiProperty() ownerID: number;
  @ApiProperty() ownerType: number;
  @ApiPropertyOptional() ownerCodeProperty?: string;
  @ApiProperty() scopeOwnerRef: number;
  @ApiProperty() currencyRef: number;
  @ApiProperty() accountTypeRef: number;
  @ApiProperty() number: string;
  @ApiProperty() creationDate: Date;
  @ApiPropertyOptional() expirationDate?: Date;
  @ApiProperty() effectScope: number;
  @ApiProperty() debitBalance: string;
  @ApiProperty() creditBalance: string;
  @ApiProperty() balance: string;
  @ApiPropertyOptional() onCreditCreditBalance?: string;
  @ApiPropertyOptional() onCreditDebitBalance?: string;
  @ApiPropertyOptional() onCreditBalance?: string;
  @ApiProperty() debitReserve: string;
  @ApiProperty() creditReserve: string;
  @ApiProperty() reserveBalance: string;
  @ApiProperty() status: number;
  @ApiPropertyOptional() partyRef?: number;
  @ApiProperty() isAutomatic: boolean;
}

export class LegacyAccountTypeDto {
  @ApiProperty() accountTypeID: number;
  @ApiProperty() number: string;
  @ApiProperty() name: string;
  @ApiProperty() categoryType: number;
  @ApiProperty() isCreditable: boolean;
  @ApiProperty() isStatic: boolean;
}
