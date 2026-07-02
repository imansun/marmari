import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialPackage' })
export class LegacySerialPackage {
  @PrimaryColumn({ type: 'bigint', name: 'SerialPackageID' })
  serialPackageID: number;

  @Column({ type: 'bigint', name: 'SerialTemplatePartRef', nullable: true })
  serialTemplatePartRef: number | null;

  @Column({ type: 'bigint', name: 'SerialTemplateRef' })
  serialTemplateRef: number;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'integer', name: 'SerialType' })
  serialType: number;

  @Column({ type: 'integer', name: 'LastIndex' })
  lastIndex: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}