import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Delivery' })
export class LegacyDelivery {
  @PrimaryColumn({ type: 'bigint', name: 'DeliveryID' })
  deliveryID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'DeliveryDate' })
  deliveryDate: Date;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'DelivererRef', nullable: true })
  delivererRef: number | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'RecipientRef', nullable: true })
  recipientRef: number | null;

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

  @Column({ type: 'bigint', name: 'MaintenanceCenterRef' })
  maintenanceCenterRef: number;

  @Column({ type: 'bigint', name: 'RequestBranchRef' })
  requestBranchRef: number;

  @Column({ type: 'bigint', name: 'ReceiverBranchRef' })
  receiverBranchRef: number;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

}