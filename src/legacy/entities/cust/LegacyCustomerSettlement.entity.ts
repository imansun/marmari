import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerSettlement' })
export class LegacyCustomerSettlement {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerSettlementID' })
  customerSettlementID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'SettlementDate' })
  settlementDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'SettlementDayDate' })
  settlementDayDate: Date;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'ParentCustomerRef', nullable: true })
  parentCustomerRef: number | null;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef', nullable: true })
  retailInteriorSectionRef: number | null;

  @Column({ type: 'bigint', name: 'CashierRef' })
  cashierRef: number;

  @Column({ type: 'bigint', name: 'RetailSessionRef' })
  retailSessionRef: number;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'integer', name: 'SettlementType' })
  settlementType: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'PayerAccountRef', nullable: true })
  payerAccountRef: number | null;

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

  @Column({ type: 'bigint', name: 'OfflineID', nullable: true })
  offlineID: number | null;

}