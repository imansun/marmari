import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoyaltyMemberPatternAttribute' })
export class LegacyLoyaltyMemberPatternAttribute {
  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyMemberPatternAttributeID' })
  loyaltyMemberPatternAttributeID: number;

  @Column({ type: 'bigint', name: 'LoyaltyMemberPatternRef' })
  loyaltyMemberPatternRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'DataType' })
  dataType: number;

  @Column({ type: 'character varying', name: 'TypeMetadata', nullable: true })
  typeMetadata: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsIdentifier' })
  isIdentifier: boolean;

}