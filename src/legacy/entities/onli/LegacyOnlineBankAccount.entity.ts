import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlineBankAccount' })
export class LegacyOnlineBankAccount {
  @PrimaryColumn({ type: 'bigint', name: 'OnlineBankAccountID' })
  onlineBankAccountID: number;

  @Column({ type: 'character varying', name: 'IBANNumber' })
  iBANNumber: string;

  @Column({ type: 'character varying', name: 'DepositNumber' })
  depositNumber: string;

  @Column({ type: 'character varying', name: 'BankName' })
  bankName: string;

  @Column({ type: 'character varying', name: 'BankCode' })
  bankCode: string;

  @Column({ type: 'bigint', name: 'OnlineGatewayUserAccountRef' })
  onlineGatewayUserAccountRef: number;

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