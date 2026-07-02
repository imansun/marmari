import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccidentItem' })
export class LegacyAccidentItem {
  @PrimaryColumn({ type: 'bigint', name: 'AccidentItemID' })
  accidentItemID: number;

  @Column({ type: 'bigint', name: 'AccidentRef' })
  accidentRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'Time', nullable: true })
  time: number | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}