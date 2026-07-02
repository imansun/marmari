import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ClosingReason' })
export class LegacyClosingReason {
  @PrimaryColumn({ type: 'bigint', name: 'ClosingReasonID' })
  closingReasonID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}