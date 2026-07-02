import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SamplingTable' })
export class LegacySamplingTable {
  @PrimaryColumn({ type: 'bigint', name: 'SamplingTableID' })
  samplingTableID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'InspectionLevel' })
  inspectionLevel: number;

  @Column({ type: 'numeric', name: 'AcceptanceQualityLimit', nullable: true })
  acceptanceQualityLimit: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}