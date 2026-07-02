import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaterialClassStoreChangeLog' })
export class LegacyMaterialClassStoreChangeLog {
  @PrimaryColumn({ type: 'bigint', name: 'MaterialClassStoreChangeLogID' })
  materialClassStoreChangeLogID: number;

  @Column({ type: 'bigint', name: 'MaterialClassStoreItemRef' })
  materialClassStoreItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'PreviousValue' })
  previousValue: string;

  @Column({ type: 'character varying', name: 'CurrentValue' })
  currentValue: string;

  @Column({ type: 'bigint', name: 'ModifierRef' })
  modifierRef: number;

  @Column({ type: 'integer', name: 'PropertyType' })
  propertyType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'MaterialClassStoreRef', nullable: true })
  materialClassStoreRef: number | null;

}