import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductFeedComposition' })
export class LegacyProductFeedComposition {
  @PrimaryColumn({ type: 'bigint', name: 'ProductFeedCompositionID' })
  productFeedCompositionID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'ProductionUnitRef' })
  productionUnitRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartValidityDate' })
  startValidityDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndValidityDate', nullable: true })
  endValidityDate: Date | null;

  @Column({ type: 'smallint', name: 'CompositionType' })
  compositionType: number;

  @Column({ type: 'bigint', name: 'ProductFeedRef' })
  productFeedRef: number;

  @Column({ type: 'numeric', name: 'BaseQuantity' })
  baseQuantity: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}