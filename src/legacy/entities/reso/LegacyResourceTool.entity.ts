import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ResourceTool' })
export class LegacyResourceTool {
  @PrimaryColumn({ type: 'bigint', name: 'ResourceToolID' })
  resourceToolID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'EquipmentRef', nullable: true })
  equipmentRef: number | null;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'StartOffset', nullable: true })
  startOffset: number | null;

  @Column({ type: 'bigint', name: 'StartOffsetUnitRef', nullable: true })
  startOffsetUnitRef: number | null;

  @Column({ type: 'numeric', name: 'EndOffset', nullable: true })
  endOffset: number | null;

  @Column({ type: 'bigint', name: 'EndOffsetUnitRef', nullable: true })
  endOffsetUnitRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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