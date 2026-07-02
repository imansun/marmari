import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessCode' })
export class LegacyBusinessCode {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessCodeID' })
  businessCodeID: number;

  @Column({ type: 'uuid', name: 'Guid' })
  guid: string;

  @Column({ type: 'integer', name: 'CodeType' })
  codeType: number;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'TypeName' })
  typeName: string;

  @Column({ type: 'character varying', name: 'Data', nullable: true })
  data: string | null;

  @Column({ type: 'boolean', name: 'IsDeleted' })
  isDeleted: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'MetaData', nullable: true })
  metaData: string | null;

}