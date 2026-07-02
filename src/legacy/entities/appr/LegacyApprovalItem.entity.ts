import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ApprovalItem' })
export class LegacyApprovalItem {
  @PrimaryColumn({ type: 'bigint', name: 'ApprovalItemID' })
  approvalItemID: number;

  @Column({ type: 'bigint', name: 'ApprovalRef' })
  approvalRef: number;

  @Column({ type: 'bigint', name: 'OrderConfirmationItemRef' })
  orderConfirmationItemRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'DeviationReason', nullable: true })
  deviationReason: number | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}