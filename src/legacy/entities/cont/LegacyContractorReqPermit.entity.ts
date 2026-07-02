import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractorReqPermit' })
export class LegacyContractorReqPermit {
  @PrimaryColumn({ type: 'bigint', name: 'ContractorReqPermitID' })
  contractorReqPermitID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Row' })
  row: number;

  @Column({ type: 'character varying', name: 'JustificationRequestNo', nullable: true })
  justificationRequestNo: string | null;

  @Column({ type: 'timestamp without time zone', name: 'JustificationDate', nullable: true })
  justificationDate: Date | null;

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