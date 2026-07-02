import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'gnrLimitedSession' })
export class LegacyGnrLimitedSession {
  @PrimaryColumn({ type: 'integer', name: 'Serial' })
  serial: number;

  @Column({ type: 'text', name: 'Data', nullable: true })
  data: string | null;

}