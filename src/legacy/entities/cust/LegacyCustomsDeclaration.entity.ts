import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomsDeclaration' })
export class LegacyCustomsDeclaration {
  @PrimaryColumn({ type: 'bigint', name: 'CustomsDeclarationID' })
  customsDeclarationID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'RegistrationDate' })
  registrationDate: Date;

  @Column({ type: 'bigint', name: 'DeclaratorPartyRef' })
  declaratorPartyRef: number;

  @Column({ type: 'bigint', name: 'DeclaratorAgentPartyRef', nullable: true })
  declaratorAgentPartyRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'ProformaRef', nullable: true })
  proformaRef: number | null;

  @Column({ type: 'integer', name: 'DeliveryPlaceType', nullable: true })
  deliveryPlaceType: number | null;

  @Column({ type: 'bigint', name: 'DeliveryPlaceRef', nullable: true })
  deliveryPlaceRef: number | null;

  @Column({ type: 'bigint', name: 'SourceCustomsRef' })
  sourceCustomsRef: number;

  @Column({ type: 'bigint', name: 'DestinationCustomsRef' })
  destinationCustomsRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'ExchangeRate' })
  exchangeRate: number;

  @Column({ type: 'numeric', name: 'TotalValue' })
  totalValue: number;

  @Column({ type: 'numeric', name: 'TotalOperationalValue' })
  totalOperationalValue: number;

  @Column({ type: 'integer', name: 'TransportationType' })
  transportationType: number;

  @Column({ type: 'bigint', name: 'WeightUnitRef' })
  weightUnitRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

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