import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchCorrectiveEmployeeStatuteFactor' })
export class LegacyBatchCorrectiveEmployeeStatuteFactor {
  @PrimaryColumn({ type: 'bigint', name: 'BatchCorrectiveEmployeeStatuteFactorID' })
  batchCorrectiveEmployeeStatuteFactorID: number;

  @Column({ type: 'bigint', name: 'BatchCorrectiveEmployeeStatuteRef' })
  batchCorrectiveEmployeeStatuteRef: number;

  @Column({ type: 'bigint', name: 'StatuteFactorRef' })
  statuteFactorRef: number;

  @Column({ type: 'integer', name: 'AssignmentMethodCode' })
  assignmentMethodCode: number;

  @Column({ type: 'numeric', name: 'Value', nullable: true })
  value: number | null;

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

}