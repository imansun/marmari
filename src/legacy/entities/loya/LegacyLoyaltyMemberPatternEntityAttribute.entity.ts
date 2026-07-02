import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoyaltyMemberPatternEntityAttribute' })
export class LegacyLoyaltyMemberPatternEntityAttribute {
  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyMemberPatternEntityAttributeID' })
  loyaltyMemberPatternEntityAttributeID: number;

  @Column({ type: 'bigint', name: 'LoyaltyMemberPatternRef' })
  loyaltyMemberPatternRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'MappedAttribute', nullable: true })
  mappedAttribute: number | null;

  @Column({ type: 'boolean', name: 'IsIdentifier' })
  isIdentifier: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}