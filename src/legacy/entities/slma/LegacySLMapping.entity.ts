import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SLMapping' })
export class LegacySLMapping {
  @PrimaryColumn({ type: 'bigint', name: 'SLMappingID' })
  sLMappingID: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'bigint', name: 'LeadingSLRef' })
  leadingSLRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}