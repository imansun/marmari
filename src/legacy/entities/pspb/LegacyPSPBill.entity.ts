import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PSPBill' })
export class LegacyPSPBill {
  @PrimaryColumn({ type: 'bigint', name: 'PSPBillID' })
  pSPBillID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'bigint', name: 'SalesTerminalRef' })
  salesTerminalRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'numeric', name: 'SumAmount' })
  sumAmount: number;

  @Column({ type: 'bigint', name: 'ItemCount' })
  itemCount: number;

  @Column({ type: 'timestamp without time zone', name: 'FirstTransactionDate', nullable: true })
  firstTransactionDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'LastTransactionDate', nullable: true })
  lastTransactionDate: Date | null;

  @Column({ type: 'character varying', name: 'GatewayKey' })
  gatewayKey: string;

  @Column({ type: 'character varying', name: 'GatewayAPIDescription', nullable: true })
  gatewayAPIDescription: string | null;

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