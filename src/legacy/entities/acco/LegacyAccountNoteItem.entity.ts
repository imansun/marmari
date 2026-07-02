import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountNoteItem' })
export class LegacyAccountNoteItem {
  @PrimaryColumn({ type: 'bigint', name: 'AccountNoteItemID' })
  accountNoteItemID: number;

  @Column({ type: 'bigint', name: 'AccountNoteRef' })
  accountNoteRef: number;

  @Column({ type: 'bigint', name: 'GLRef', nullable: true })
  gLRef: number | null;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef', nullable: true })
  dLTypeRef: number | null;

  @Column({ type: 'character varying', name: 'DLCode', nullable: true })
  dLCode: string | null;

  @Column({ type: 'bigint', name: 'TopicRef', nullable: true })
  topicRef: number | null;

  @Column({ type: 'character varying', name: 'TopicTitle', nullable: true })
  topicTitle: string | null;

  @Column({ type: 'integer', name: 'RowNo' })
  rowNo: number;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount1', nullable: true })
  comparativeAmount1: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount2', nullable: true })
  comparativeAmount2: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount3', nullable: true })
  comparativeAmount3: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount4', nullable: true })
  comparativeAmount4: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}