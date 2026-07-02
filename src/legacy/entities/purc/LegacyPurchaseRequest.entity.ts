import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseRequest' })
export class LegacyPurchaseRequest {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseRequestID' })
  purchaseRequestID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate' })
  requestDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'RequestingCenterRef' })
  requestingCenterRef: number;

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

  @Column({ type: 'integer', name: 'PurchaseItemType', nullable: true })
  purchaseItemType: number | null;

  @Column({ type: 'bigint', name: 'RequesterRef', nullable: true })
  requesterRef: number | null;

  @Column({ type: 'integer', name: 'CounterpartType' })
  counterpartType: number;

  @Column({ type: 'bigint', name: 'CounterpartRef' })
  counterpartRef: number;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef', nullable: true })
  purchasingDepartmentRef: number | null;

  @Column({ type: 'integer', name: 'PurchaseRequestType', nullable: true })
  purchaseRequestType: number | null;

}