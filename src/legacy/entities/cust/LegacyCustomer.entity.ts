import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Customer' })
export class LegacyCustomer {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerID' })
  customerID: number;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'SecondCode', nullable: true })
  secondCode: string | null;

  @Column({ type: 'character varying', name: 'ExchangeCode', nullable: true })
  exchangeCode: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'timestamp without time zone', name: 'DeclarationDate' })
  declarationDate: Date;

  @Column({ type: 'integer', name: 'EffectScope' })
  effectScope: number;

  @Column({ type: 'boolean', name: 'IsRepresentative' })
  isRepresentative: boolean;

  @Column({ type: 'boolean', name: 'IsCustomerRelatedToSalesOffice' })
  isCustomerRelatedToSalesOffice: boolean;

  @Column({ type: 'bigint', name: 'OwnerEnterpriseRef', nullable: true })
  ownerEnterpriseRef: number | null;

  @Column({ type: 'bigint', name: 'OwnerCompanyRef', nullable: true })
  ownerCompanyRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

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

  @Column({ type: 'boolean', name: 'IsExportCustomer' })
  isExportCustomer: boolean;

  @Column({ type: 'bigint', name: 'ParentCustomerRef', nullable: true })
  parentCustomerRef: number | null;

  @Column({ type: 'bigint', name: 'RepresenterRef', nullable: true })
  representerRef: number | null;

  @Column({ type: 'boolean', name: 'IsDependent', nullable: true })
  isDependent: boolean | null;

  @Column({ type: 'integer', name: 'CustomerDefaultPayerType', nullable: true })
  customerDefaultPayerType: number | null;

  @Column({ type: 'character varying', name: 'CivilParticipationCode', nullable: true })
  civilParticipationCode: string | null;

  @Column({ type: 'boolean', name: 'IsTypeOfCivilParticipation' })
  isTypeOfCivilParticipation: boolean;

  @Column({ type: 'character varying', name: 'BuyerBranchCode', nullable: true })
  buyerBranchCode: string | null;

}