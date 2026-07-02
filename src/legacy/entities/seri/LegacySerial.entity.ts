import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Serial' })
export class LegacySerial {
  @PrimaryColumn({ type: 'bigint', name: 'SerialID' })
  serialID: number;

  @Column({ type: 'bigint', name: 'SerialPackageRef', nullable: true })
  serialPackageRef: number | null;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'integer', name: 'Index', nullable: true })
  index: number | null;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}