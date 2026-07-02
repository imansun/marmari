import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartContainer' })
export class LegacyPartContainer {
  @PrimaryColumn({ type: 'bigint', name: 'PartContainerID' })
  partContainerID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}