import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalFormItemActor' })
export class LegacyAppraisalFormItemActor {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalFormItemActorID' })
  appraisalFormItemActorID: number;

  @Column({ type: 'bigint', name: 'AppraisalFormItemRef' })
  appraisalFormItemRef: number;

  @Column({ type: 'bigint', name: 'AppraisalFormActorRef' })
  appraisalFormActorRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}