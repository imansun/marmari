import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'QuotationPolicyContextItem' })
export class LegacyQuotationPolicyContextItem {
  @PrimaryColumn({ type: 'bigint', name: 'QuotationPolicyContextItemID' })
  quotationPolicyContextItemID: number;

  @Column({ type: 'bigint', name: 'QuotationRef' })
  quotationRef: number;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef', nullable: true })
  businessPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'ItemRef', nullable: true })
  itemRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}