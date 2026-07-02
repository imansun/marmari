import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialPrintItem' })
export class LegacySerialPrintItem {
  @PrimaryColumn({ type: 'bigint', name: 'SerialPrintItemID' })
  serialPrintItemID: number;

  @Column({ type: 'bigint', name: 'SerialPrintRef' })
  serialPrintRef: number;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'SerialPackageRef' })
  serialPackageRef: number;

  @Column({ type: 'bigint', name: 'SerialRef' })
  serialRef: number;

  @Column({ type: 'integer', name: 'Count' })
  count: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'NumberOfCopies', default: 1 })
  numberOfCopies: number;

}