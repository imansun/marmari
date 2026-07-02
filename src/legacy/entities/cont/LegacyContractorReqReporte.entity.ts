import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractorReqReporte' })
export class LegacyContractorReqReporte {
  @PrimaryColumn({ type: 'bigint', name: 'ContractorReqReporteID' })
  contractorReqReporteID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Row' })
  row: number;

  @Column({ type: 'bigint', name: 'ReportageLiableNameRef', nullable: true })
  reportageLiableNameRef: number | null;

  @Column({ type: 'numeric', name: 'StuffAccessionCent', nullable: true })
  stuffAccessionCent: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ReportageDate', nullable: true })
  reportageDate: Date | null;

  @Column({ type: 'character varying', name: 'ReportageDescription', nullable: true })
  reportageDescription: string | null;

  @Column({ type: 'character varying', name: 'StuffReportageNo', nullable: true })
  stuffReportageNo: string | null;

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