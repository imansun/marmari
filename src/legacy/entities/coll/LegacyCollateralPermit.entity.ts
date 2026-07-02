import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CollateralPermit' })
export class LegacyCollateralPermit {
  @PrimaryColumn({ type: 'bigint', name: 'CollateralPermitID' })
  collateralPermitID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'ReceivableCollateralRef', nullable: true })
  receivableCollateralRef: number | null;

  @Column({ type: 'bigint', name: 'PayableCollateralRef', nullable: true })
  payableCollateralRef: number | null;

  @Column({ type: 'integer', name: 'CollateralPermitType' })
  collateralPermitType: number;

  @Column({ type: 'integer', name: 'CollateralPermitCause', nullable: true })
  collateralPermitCause: number | null;

  @Column({ type: 'numeric', name: 'ModifiedAmount', nullable: true })
  modifiedAmount: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DueDate', nullable: true })
  dueDate: Date | null;

  @Column({ type: 'integer', name: 'ApproveState' })
  approveState: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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