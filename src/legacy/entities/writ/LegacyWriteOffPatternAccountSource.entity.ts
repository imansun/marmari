import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WriteOffPatternAccountSource' })
export class LegacyWriteOffPatternAccountSource {
  @PrimaryColumn({ type: 'bigint', name: 'WriteOffPatternAccountSourceID' })
  writeOffPatternAccountSourceID: number;

  @Column({ type: 'bigint', name: 'WriteOffPatternAccountRef' })
  writeOffPatternAccountRef: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'smallint', name: 'DLLevel', default: 0 })
  dLLevel: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}