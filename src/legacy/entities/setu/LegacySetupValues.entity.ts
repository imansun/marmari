import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SetupValues' })
export class LegacySetupValues {
  @PrimaryColumn({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

}