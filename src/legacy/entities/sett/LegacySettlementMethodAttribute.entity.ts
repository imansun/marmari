import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementMethodAttribute' })
export class LegacySettlementMethodAttribute {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementMethodAttributeID' })
  settlementMethodAttributeID: number;

  @Column({ type: 'character varying', name: 'AttributeKey' })
  attributeKey: string;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'character varying', name: 'DisplayValue', nullable: true })
  displayValue: string | null;

  @Column({ type: 'bigint', name: 'SettlementMethodRef' })
  settlementMethodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Category' })
  category: number;

  @Column({ type: 'boolean', name: 'IsVisible' })
  isVisible: boolean;

}