import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalFormItemActorAnswer' })
export class LegacyAppraisalFormItemActorAnswer {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalFormItemActorAnswerID' })
  appraisalFormItemActorAnswerID: number;

  @Column({ type: 'bigint', name: 'AppraisalFormItemActorRef' })
  appraisalFormItemActorRef: number;

  @Column({ type: 'bigint', name: 'AppraisalFormAnswerStructureRef', nullable: true })
  appraisalFormAnswerStructureRef: number | null;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'boolean', name: 'Checked', nullable: true })
  checked: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}