import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseItem' })
export class LegacyPurchaseItem {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseItemID' })
  purchaseItemID: number;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bigint', name: 'ServiceRef', nullable: true })
  serviceRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'boolean', name: 'AutoOrder', default: false })
  autoOrder: boolean;

}