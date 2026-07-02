import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IncomingContainerItem' })
export class LegacyIncomingContainerItem {
  @PrimaryColumn({ type: 'bigint', name: 'IncomingContainerItemID' })
  incomingContainerItemID: number;

  @Column({ type: 'bigint', name: 'IncomingContainerRef' })
  incomingContainerRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'ContainerNumber' })
  containerNumber: string;

  @Column({ type: 'numeric', name: 'Weight' })
  weight: number;

  @Column({ type: 'bigint', name: 'WeightUnitRef' })
  weightUnitRef: number;

  @Column({ type: 'numeric', name: 'Height', nullable: true })
  height: number | null;

  @Column({ type: 'numeric', name: 'Length', nullable: true })
  length: number | null;

  @Column({ type: 'numeric', name: 'Width', nullable: true })
  width: number | null;

  @Column({ type: 'bigint', name: 'DimensionUnitRef', nullable: true })
  dimensionUnitRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'FirstAdditionalField', nullable: true })
  firstAdditionalField: string | null;

  @Column({ type: 'character varying', name: 'SecondAdditionalField', nullable: true })
  secondAdditionalField: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}