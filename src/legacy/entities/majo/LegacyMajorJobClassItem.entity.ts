import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MajorJobClassItem' })
export class LegacyMajorJobClassItem {
  @PrimaryColumn({ type: 'bigint', name: 'MajorJobClassItemID' })
  majorJobClassItemID: number;

  @Column({ type: 'bigint', name: 'MajorJobClassRef' })
  majorJobClassRef: number;

  @Column({ type: 'integer', name: 'ClassCode' })
  classCode: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}