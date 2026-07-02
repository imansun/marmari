import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Broker' })
export class LegacyBroker {
  @PrimaryColumn({ type: 'bigint', name: 'BrokerID' })
  brokerID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsBurseBroker' })
  isBurseBroker: boolean;

  @Column({ type: 'timestamp without time zone', name: 'DeclarationDate' })
  declarationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'HandheldDeviceRef', nullable: true })
  handheldDeviceRef: number | null;

  @Column({ type: 'bigint', name: 'HandheldPrinterRef', nullable: true })
  handheldPrinterRef: number | null;

  @Column({ type: 'bigint', name: 'HandheldPosRef', nullable: true })
  handheldPosRef: number | null;

  @Column({ type: 'character varying', name: 'Password', nullable: true })
  password: string | null;

  @Column({ type: 'boolean', name: 'IsOrganizationEmployee' })
  isOrganizationEmployee: boolean;

}