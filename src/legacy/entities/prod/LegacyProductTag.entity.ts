import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductTag' })
export class LegacyProductTag {
  @PrimaryColumn({ type: 'bigint', name: 'ProductTagID' })
  productTagID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'SelectedFields' })
  selectedFields: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'GenerationData', nullable: true })
  generationData: string | null;

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

  @Column({ type: 'integer', name: 'CounterType' })
  counterType: number;

  @Column({ type: 'boolean', name: 'IsManualPrintTag', default: false })
  isManualPrintTag: boolean;

  @Column({ type: 'boolean', name: 'UsableInEveryShop', default: false })
  usableInEveryShop: boolean;

}