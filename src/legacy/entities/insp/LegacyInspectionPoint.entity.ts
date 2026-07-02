import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionPoint' })
export class LegacyInspectionPoint {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionPointID' })
  inspectionPointID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'smallint', name: 'TimeUnit', nullable: true })
  timeUnit: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'smallint', name: 'Type', nullable: true })
  type: number | null;

  @Column({ type: 'bigint', name: 'Value', nullable: true })
  value: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}