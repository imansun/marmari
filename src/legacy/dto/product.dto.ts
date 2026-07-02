import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LegacyProductDto {
  @ApiProperty() productID: number;
  @ApiProperty() type: number;
  @ApiProperty() dependencyType: number;
  @ApiPropertyOptional() partRef?: number;
  @ApiPropertyOptional() serviceRef?: number;
  @ApiProperty() unitRef: number;
  @ApiPropertyOptional() priceBaseUnitRef?: number;
  @ApiProperty() smallestUnitPartEntityUnitRef: number;
  @ApiProperty() biggestUnitPartEntityUnitRef: number;
  @ApiProperty() partMajorEntityUnitRef: number;
  @ApiProperty() number: string;
  @ApiPropertyOptional() secondCode?: string;
  @ApiProperty() name: string;
  @ApiProperty() state: number;
  @ApiProperty() isFreeProduct: boolean;
  @ApiPropertyOptional() description?: string;
  @ApiProperty() creator: number;
  @ApiProperty() creationDate: Date;
  @ApiProperty() lastModifier: number;
  @ApiProperty() lastModificationDate: Date;
  @ApiProperty() companyRef: number;
  @ApiProperty() criticalDays: number;
}
