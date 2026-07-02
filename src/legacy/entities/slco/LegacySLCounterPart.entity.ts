import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SLCounterPart' })
export class LegacySLCounterPart {
  @PrimaryColumn({ type: 'bigint', name: 'SLCounterPartID' })
  sLCounterPartID: number;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'bigint', name: 'SLCounterPartRef', nullable: true })
  sLCounterPartRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}