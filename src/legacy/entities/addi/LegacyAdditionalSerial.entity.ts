import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AdditionalSerial' })
export class LegacyAdditionalSerial {
  @PrimaryColumn({ type: 'bigint', name: 'AdditionalSerialID' })
  additionalSerialID: number;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'bigint', name: 'SerialRef', nullable: true })
  serialRef: number | null;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'GenerationType' })
  generationType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}