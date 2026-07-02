import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReworkReason' })
export class LegacyReworkReason {
  @PrimaryColumn({ type: 'bigint', name: 'ReworkReasonID' })
  reworkReasonID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Barcode', nullable: true })
  barcode: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}