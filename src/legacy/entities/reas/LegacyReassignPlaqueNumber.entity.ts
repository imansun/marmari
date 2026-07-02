import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReassignPlaqueNumber' })
export class LegacyReassignPlaqueNumber {
  @PrimaryColumn({ type: 'bigint', name: 'ReassignPlaqueNumberID' })
  reassignPlaqueNumberID: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'character varying', name: 'CurrentPlaqueNumber' })
  currentPlaqueNumber: string;

  @Column({ type: 'character varying', name: 'NewPlaqueNumber' })
  newPlaqueNumber: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}