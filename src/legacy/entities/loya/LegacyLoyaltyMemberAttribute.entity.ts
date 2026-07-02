import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoyaltyMemberAttribute' })
export class LegacyLoyaltyMemberAttribute {
  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyMemberAttributeID' })
  loyaltyMemberAttributeID: number;

  @Column({ type: 'bigint', name: 'LoyaltyMemberRef' })
  loyaltyMemberRef: number;

  @Column({ type: 'bigint', name: 'LoyaltyMemberPatternAttributeRef' })
  loyaltyMemberPatternAttributeRef: number;

  @Column({ type: 'character varying', name: 'StringValue', nullable: true })
  stringValue: string | null;

  @Column({ type: 'numeric', name: 'NumberValue', nullable: true })
  numberValue: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DateTimeValue', nullable: true })
  dateTimeValue: Date | null;

  @Column({ type: 'boolean', name: 'BooleanValue', nullable: true })
  booleanValue: boolean | null;

  @Column({ type: 'integer', name: 'LookupValue', nullable: true })
  lookupValue: number | null;

  @Column({ type: 'bigint', name: 'ReferenceValue', nullable: true })
  referenceValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}