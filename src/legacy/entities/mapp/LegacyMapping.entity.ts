import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Mapping' })
export class LegacyMapping {
  @PrimaryColumn({ type: 'bigint', name: 'MappingID' })
  mappingID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'MappingStructureRef' })
  mappingStructureRef: number;

  @Column({ type: 'boolean', name: 'Status', default: false })
  status: boolean;

  @Column({ type: 'timestamp without time zone', name: 'ActivationDate', nullable: true })
  activationDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}