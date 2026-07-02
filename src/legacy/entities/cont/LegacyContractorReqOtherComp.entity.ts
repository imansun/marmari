import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractorReqOtherComp' })
export class LegacyContractorReqOtherComp {
  @PrimaryColumn({ type: 'bigint', name: 'ContractorReqOtherCompID' })
  contractorReqOtherCompID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Row' })
  row: number;

  @Column({ type: 'character varying', name: 'CompanyName', nullable: true })
  companyName: string | null;

  @Column({ type: 'character varying', name: 'ContractorCompanyLiableName', nullable: true })
  contractorCompanyLiableName: string | null;

  @Column({ type: 'character varying', name: 'ContractorAcceptanceInexistenceAgument', nullable: true })
  contractorAcceptanceInexistenceAgument: string | null;

  @Column({ type: 'character varying', name: 'ContractorBidAgument', nullable: true })
  contractorBidAgument: string | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'boolean', name: 'DardTamynkalaUntoDemand', nullable: true })
  dardTamynkalaUntoDemand: boolean | null;

  @Column({ type: 'numeric', name: 'PotentExperience', nullable: true })
  potentExperience: number | null;

  @Column({ type: 'numeric', name: 'DuringBeauty', nullable: true })
  duringBeauty: number | null;

  @Column({ type: 'numeric', name: 'BrnamhryzAndScientificExponent', nullable: true })
  brnamhryzAndScientificExponent: number | null;

  @Column({ type: 'numeric', name: 'AccessEquipment', nullable: true })
  accessEquipment: number | null;

  @Column({ type: 'numeric', name: 'MalayExponent', nullable: true })
  malayExponent: number | null;

  @Column({ type: 'numeric', name: 'HeftEventualCharter', nullable: true })
  heftEventualCharter: number | null;

  @Column({ type: 'numeric', name: 'AccordInquiryAmount', nullable: true })
  accordInquiryAmount: number | null;

  @Column({ type: 'boolean', name: 'ContractorApprobation', nullable: true })
  contractorApprobation: boolean | null;

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