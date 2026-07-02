import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractorReport' })
export class LegacyContractorReport {
  @PrimaryColumn({ type: 'bigint', name: 'ContractorReportID' })
  contractorReportID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'ReportageNo' })
  reportageNo: string;

  @Column({ type: 'bigint', name: 'ContractorReqNoRef', nullable: true })
  contractorReqNoRef: number | null;

  @Column({ type: 'character varying', name: 'ContractorCompanyName', nullable: true })
  contractorCompanyName: string | null;

  @Column({ type: 'character varying', name: 'ServicesRequesterName', nullable: true })
  servicesRequesterName: string | null;

  @Column({ type: 'numeric', name: 'PercentPishraftRep', nullable: true })
  percentPishraftRep: number | null;

  @Column({ type: 'bigint', name: 'ReportageNameRef', nullable: true })
  reportageNameRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ReportageDate', nullable: true })
  reportageDate: Date | null;

  @Column({ type: 'character varying', name: 'ReportDescription', nullable: true })
  reportDescription: string | null;

  @Column({ type: 'character varying', name: 'StuffContinuanceDescription', nullable: true })
  stuffContinuanceDescription: string | null;

  @Column({ type: 'bigint', name: 'ReportageFoundationRef', nullable: true })
  reportageFoundationRef: number | null;

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

  @Column({ type: 'integer', name: 'RespectiveCredit', nullable: true })
  respectiveCredit: number | null;

  @Column({ type: 'character varying', name: 'ManagerComments', nullable: true })
  managerComments: string | null;

  @Column({ type: 'character varying', name: 'SeniorManagementComments', nullable: true })
  seniorManagementComments: string | null;

  @Column({ type: 'character varying', name: 'MdyraamlComments', nullable: true })
  mdyraamlComments: string | null;

  @Column({ type: 'character varying', name: 'MalayManagerComments', nullable: true })
  malayManagerComments: string | null;

  @Column({ type: 'character varying', name: 'DuringIsDesigning', nullable: true })
  duringIsDesigning: string | null;

}