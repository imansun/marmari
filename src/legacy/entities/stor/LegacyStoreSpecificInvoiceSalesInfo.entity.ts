import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StoreSpecificInvoiceSalesInfo' })
export class LegacyStoreSpecificInvoiceSalesInfo {
  @PrimaryColumn({ type: 'bigint', name: 'StoreSpecificInvoiceSalesInfoID' })
  storeSpecificInvoiceSalesInfoID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'bigint', name: 'ProductOutletCodeRef', nullable: true })
  productOutletCodeRef: number | null;

  @Column({ type: 'character varying', name: 'ProductOutletName', nullable: true })
  productOutletName: string | null;

  @Column({ type: 'numeric', name: 'Rate', nullable: true })
  rate: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'numeric', name: 'ItemCentAbatement', nullable: true })
  itemCentAbatement: number | null;

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

}