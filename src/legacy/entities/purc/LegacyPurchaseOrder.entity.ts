import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseOrder' })
export class LegacyPurchaseOrder {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseOrderID' })
  purchaseOrderID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'PurchaseOrderDate' })
  purchaseOrderDate: Date;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

}