import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'COAGroupingSLDL' })
export class LegacyCOAGroupingSLDL {
  @PrimaryColumn({ type: 'bigint', name: 'COAGroupingSLDLID' })
  cOAGroupingSLDLID: number;

  @Column({ type: 'bigint', name: 'COAGroupingSLRef' })
  cOAGroupingSLRef: number;

  @Column({ type: 'character varying', name: 'DLRef' })
  dLRef: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}