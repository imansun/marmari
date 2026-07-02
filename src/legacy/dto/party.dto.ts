import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LegacyPartyDto {
  @ApiProperty() partyID: number;
  @ApiPropertyOptional() title?: number;
  @ApiPropertyOptional() firstName?: string;
  @ApiPropertyOptional() lastName?: string;
  @ApiPropertyOptional() fullName?: string;
  @ApiPropertyOptional() alias?: string;
  @ApiPropertyOptional() nationalID?: string;
  @ApiPropertyOptional() mobile?: string;
  @ApiPropertyOptional() email?: string;
  @ApiPropertyOptional() economicCode?: string;
  @ApiPropertyOptional() registrationCode?: string;
  @ApiPropertyOptional() companyName?: string;
  @ApiProperty() number: string;
  @ApiProperty() type: number;
  @ApiPropertyOptional() tel?: string;
  @ApiPropertyOptional() address?: string;
  @ApiPropertyOptional() postalCode?: string;
  @ApiProperty() creator: number;
  @ApiProperty() creationDate: Date;
  @ApiProperty() lastModifier: number;
  @ApiProperty() lastModificationDate: Date;
}
