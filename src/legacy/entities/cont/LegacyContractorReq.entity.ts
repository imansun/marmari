import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractorReq' })
export class LegacyContractorReq {
  @PrimaryColumn({ type: 'bigint', name: 'ContractorReqID' })
  contractorReqID: number;

  @Column({ type: 'character varying', name: 'RequestNo' })
  requestNo: string;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

  @Column({ type: 'character varying', name: 'ContractorDemandAgument', nullable: true })
  contractorDemandAgument: string | null;

  @Column({ type: 'character varying', name: 'MurdnyazServicesDescription', nullable: true })
  murdnyazServicesDescription: string | null;

  @Column({ type: 'bigint', name: 'ContractorCompanyNameRef', nullable: true })
  contractorCompanyNameRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'NiazDate', nullable: true })
  niazDate: Date | null;

  @Column({ type: 'bigint', name: 'DoerRequestNameRef', nullable: true })
  doerRequestNameRef: number | null;

  @Column({ type: 'integer', name: 'ApproximateDuration', nullable: true })
  approximateDuration: number | null;

  @Column({ type: 'character varying', name: 'ProjManagerName', nullable: true })
  projManagerName: string | null;

  @Column({ type: 'bigint', name: 'EstalamshrktpyshnhadFrame', nullable: true })
  estalamshrktpyshnhadFrame: number | null;

  @Column({ type: 'bigint', name: 'EstalamshrktdumFrame', nullable: true })
  estalamshrktdumFrame: number | null;

  @Column({ type: 'bigint', name: 'AstalamshrktsumFrame', nullable: true })
  astalamshrktsumFrame: number | null;

  @Column({ type: 'boolean', name: 'MabnaProj', nullable: true })
  mabnaProj: boolean | null;

  @Column({ type: 'bigint', name: 'ProjectNameRef', nullable: true })
  projectNameRef: number | null;

  @Column({ type: 'character varying', name: 'TjhyzatmurdnyazSecureTable', nullable: true })
  tjhyzatmurdnyazSecureTable: string | null;

  @Column({ type: 'numeric', name: 'AkhtsasyafthBudget', nullable: true })
  akhtsasyafthBudget: number | null;

  @Column({ type: 'numeric', name: 'PaymentSum', nullable: true })
  paymentSum: number | null;

  @Column({ type: 'numeric', name: 'BudgetAnhrafaz', nullable: true })
  budgetAnhrafaz: number | null;

  @Column({ type: 'bigint', name: 'GhrardadFrame', nullable: true })
  ghrardadFrame: number | null;

  @Column({ type: 'numeric', name: 'StuffAccessionCent', nullable: true })
  stuffAccessionCent: number | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'bigint', name: 'TahdhsnajraykarFrame', nullable: true })
  tahdhsnajraykarFrame: number | null;

  @Column({ type: 'bigint', name: 'Sayr', nullable: true })
  sayr: number | null;

  @Column({ type: 'boolean', name: 'GroupStellarManagementConfirmUntoDemand', nullable: true })
  groupStellarManagementConfirmUntoDemand: boolean | null;

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

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'RespectiveCredit', nullable: true })
  respectiveCredit: number | null;

  @Column({ type: 'character varying', name: 'ManagerComments', nullable: true })
  managerComments: string | null;

  @Column({ type: 'character varying', name: 'MdyranarshdComments', nullable: true })
  mdyranarshdComments: string | null;

  @Column({ type: 'character varying', name: 'MdyraamlComments', nullable: true })
  mdyraamlComments: string | null;

  @Column({ type: 'character varying', name: 'MalayManagerComments', nullable: true })
  malayManagerComments: string | null;

  @Column({ type: 'character varying', name: 'SupplementalComments', nullable: true })
  supplementalComments: string | null;

  @Column({ type: 'character varying', name: 'DuringTrahyshdh', nullable: true })
  duringTrahyshdh: string | null;

}