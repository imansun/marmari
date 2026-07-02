import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CorrectiveEmployeeStatuteFactor' })
export class LegacyCorrectiveEmployeeStatuteFactor {
  @PrimaryColumn({ type: 'bigint', name: 'CorrectiveEmployeeStatuteFactorID' })
  correctiveEmployeeStatuteFactorID: number;

  @Column({ type: 'bigint', name: 'CorrectiveEmployeeStatuteRef' })
  correctiveEmployeeStatuteRef: number;

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