import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PromissoryNoteItem' })
export class LegacyPromissoryNoteItem {
  @PrimaryColumn({ type: 'bigint', name: 'PromissoryNoteItemID' })
  promissoryNoteItemID: number;

  @Column({ type: 'bigint', name: 'PromissoryNoteRef' })
  promissoryNoteRef: number;

  @Column({ type: 'character varying', name: 'Serial' })
  serial: string;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}