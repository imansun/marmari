import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'COAGroupingSL' })
export class LegacyCOAGroupingSL {
  @PrimaryColumn({ type: 'bigint', name: 'COAGroupingSLID' })
  cOAGroupingSLID: number;

  @Column({ type: 'bigint', name: 'COAGroupingRef' })
  cOAGroupingRef: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}