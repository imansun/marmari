import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FileStructureRetirement' })
export class LegacyFileStructureRetirement {
  @PrimaryColumn({ type: 'bigint', name: 'FileStructureRetirementID' })
  fileStructureRetirementID: number;

  @Column({ type: 'bigint', name: 'FileStructureRef' })
  fileStructureRef: number;

  @Column({ type: 'integer', name: 'WageSystemTypeCode' })
  wageSystemTypeCode: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}