import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DeliveryReturn' })
export class LegacyDeliveryReturn {
  @PrimaryColumn({ type: 'bigint', name: 'DeliveryReturnID' })
  deliveryReturnID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'DeliveryReturnDate' })
  deliveryReturnDate: Date;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'DeliveryRef' })
  deliveryRef: number;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'SettlementType', nullable: true })
  settlementType: number | null;

  @Column({ type: 'integer', name: 'ResupplyType', nullable: true })
  resupplyType: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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

  @Column({ type: 'bigint', name: 'RequestBranchRef' })
  requestBranchRef: number;

  @Column({ type: 'bigint', name: 'ReceiverBranchRef' })
  receiverBranchRef: number;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

  @Column({ type: 'bigint', name: 'RecipientRef' })
  recipientRef: number;

}