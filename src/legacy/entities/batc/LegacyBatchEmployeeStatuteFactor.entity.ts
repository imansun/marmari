import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchEmployeeStatuteFactor' })
export class LegacyBatchEmployeeStatuteFactor {
  @PrimaryColumn({ type: 'bigint', name: 'BatchEmployeeStatuteFactorID' })
  batchEmployeeStatuteFactorID: number;

  @Column({ type: 'bigint', name: 'BatchEmployeeStatuteRef' })
  batchEmployeeStatuteRef: number;

  @Column({ type: 'bigint', name: 'StatuteFactorRef' })
  statuteFactorRef: number;

  @Column({ type: 'integer', name: 'AssignmentMethodCode' })
  assignmentMethodCode: number;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'numeric', name: 'SpecifiedValue', nullable: true })
  specifiedValue: number | null;

  @Column({ type: 'double precision', name: 'Percent', nullable: true })
  percent: string | null;

}