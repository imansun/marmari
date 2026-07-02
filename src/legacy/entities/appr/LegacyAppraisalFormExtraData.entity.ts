import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalFormExtraData' })
export class LegacyAppraisalFormExtraData {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalFormExtraDataID' })
  appraisalFormExtraDataID: number;

  @Column({ type: 'bigint', name: 'AppraisalFormActorRef' })
  appraisalFormActorRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}