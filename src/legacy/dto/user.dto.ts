import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LegacyUserDto {
  @ApiProperty() userID: number;
  @ApiProperty() name: string;
  @ApiProperty() status: number;
  @ApiPropertyOptional() partyRef?: number;
  @ApiProperty() type: number;
  @ApiPropertyOptional() isAdministrator?: boolean;
  @ApiProperty() isLocked: boolean;
  @ApiPropertyOptional() lockExpiration?: Date;
  @ApiPropertyOptional() password?: string;
  @ApiPropertyOptional() domainUserName?: string;
  @ApiProperty() creator: number;
  @ApiProperty() creationDate: Date;
  @ApiProperty() lastModifier: number;
  @ApiProperty() lastModificationDate: Date;
}
