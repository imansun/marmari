import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NumberingMethodRange' })
export class LegacyNumberingMethodRange {
  @PrimaryColumn({ type: 'bigint', name: 'NumberingMethodRangeID' })
  numberingMethodRangeID: number;

  @Column({ type: 'bigint', name: 'NumberingMethodRef' })
  numberingMethodRef: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'character varying', name: 'AttributeName', nullable: true })
  attributeName: string | null;

  @Column({ type: 'character varying', name: 'AttributeValues', nullable: true })
  attributeValues: string | null;

  @Column({ type: 'bigint', name: 'StartSerial' })
  startSerial: number;

  @Column({ type: 'bigint', name: 'FinishSerial', nullable: true })
  finishSerial: number | null;

  @Column({ type: 'smallint', name: 'SerialStep' })
  serialStep: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}