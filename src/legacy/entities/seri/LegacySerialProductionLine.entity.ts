import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialProductionLine' })
export class LegacySerialProductionLine {
  @PrimaryColumn({ type: 'bigint', name: 'SerialProductionLineID' })
  serialProductionLineID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'SerialProductionType' })
  serialProductionType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}