import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractTemplate' })
export class LegacyContractTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'ContractTemplateID' })
  contractTemplateID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'ContractType' })
  contractType: number;

  @Column({ type: 'integer', name: 'ContractNatureType' })
  contractNatureType: number;

  @Column({ type: 'character varying', name: 'StartDateTitle' })
  startDateTitle: string;

  @Column({ type: 'character varying', name: 'EndDateTitle', nullable: true })
  endDateTitle: string | null;

  @Column({ type: 'integer', name: 'DefaultContractTime', nullable: true })
  defaultContractTime: number | null;

  @Column({ type: 'boolean', name: 'DraftEnabled' })
  draftEnabled: boolean;

  @Column({ type: 'boolean', name: 'PartItemEnabled' })
  partItemEnabled: boolean;

  @Column({ type: 'boolean', name: 'ServiceItemEnabled' })
  serviceItemEnabled: boolean;

  @Column({ type: 'boolean', name: 'ConsumerPriceEnabled', default: false })
  consumerPriceEnabled: boolean;

  @Column({ type: 'boolean', name: 'SalesPriceEnabled', default: false })
  salesPriceEnabled: boolean;

  @Column({ type: 'character varying', name: 'Additional1', nullable: true })
  additional1: string | null;

  @Column({ type: 'character varying', name: 'Additional2', nullable: true })
  additional2: string | null;

  @Column({ type: 'character varying', name: 'Additional3', nullable: true })
  additional3: string | null;

  @Column({ type: 'character varying', name: 'Additional4', nullable: true })
  additional4: string | null;

  @Column({ type: 'character varying', name: 'Additional5', nullable: true })
  additional5: string | null;

  @Column({ type: 'boolean', name: 'IsAdditional1Required', default: false })
  isAdditional1Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditional2Required', default: false })
  isAdditional2Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditional3Required', default: false })
  isAdditional3Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditional4Required', default: false })
  isAdditional4Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditional5Required', default: false })
  isAdditional5Required: boolean;

  @Column({ type: 'character varying', name: 'AdditionalItem1', nullable: true })
  additionalItem1: string | null;

  @Column({ type: 'character varying', name: 'AdditionalItem2', nullable: true })
  additionalItem2: string | null;

  @Column({ type: 'character varying', name: 'AdditionalItem3', nullable: true })
  additionalItem3: string | null;

  @Column({ type: 'character varying', name: 'AdditionalItem4', nullable: true })
  additionalItem4: string | null;

  @Column({ type: 'character varying', name: 'AdditionalItem5', nullable: true })
  additionalItem5: string | null;

  @Column({ type: 'boolean', name: 'IsAdditionalItem1Required', default: false })
  isAdditionalItem1Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditionalItem2Required', default: false })
  isAdditionalItem2Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditionalItem3Required', default: false })
  isAdditionalItem3Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditionalItem4Required', default: false })
  isAdditionalItem4Required: boolean;

  @Column({ type: 'boolean', name: 'IsAdditionalItem5Required', default: false })
  isAdditionalItem5Required: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}