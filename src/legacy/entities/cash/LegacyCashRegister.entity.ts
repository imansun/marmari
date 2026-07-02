import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CashRegister' })
export class LegacyCashRegister {
  @PrimaryColumn({ type: 'bigint', name: 'CashRegisterID' })
  cashRegisterID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef', nullable: true })
  retailInteriorSectionRef: number | null;

  @Column({ type: 'integer', name: 'ActivityStatus' })
  activityStatus: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'MachineName' })
  machineName: string;

  @Column({ type: 'numeric', name: 'StartCashAmount', nullable: true })
  startCashAmount: number | null;

  @Column({ type: 'numeric', name: 'MaxCashAmount', nullable: true })
  maxCashAmount: number | null;

  @Column({ type: 'numeric', name: 'MaxChequeAmount', nullable: true })
  maxChequeAmount: number | null;

  @Column({ type: 'double precision', name: 'MaxChequeWarning', nullable: true })
  maxChequeWarning: string | null;

  @Column({ type: 'double precision', name: 'MaxCashWarning', nullable: true })
  maxCashWarning: string | null;

  @Column({ type: 'boolean', name: 'SituationStatus' })
  situationStatus: boolean;

  @Column({ type: 'bigint', name: 'DefaultCashierRef', nullable: true })
  defaultCashierRef: number | null;

  @Column({ type: 'boolean', name: 'HasSalesPermission' })
  hasSalesPermission: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'CashierRef', nullable: true })
  cashierRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'numeric', name: 'ChargeAmount', nullable: true })
  chargeAmount: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'RetailHandheldRef', nullable: true })
  retailHandheldRef: number | null;

  @Column({ type: 'boolean', name: 'CashierCanBeOffline' })
  cashierCanBeOffline: boolean;

}