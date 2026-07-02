import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductReceiverSource' })
export class LegacyProductReceiverSource {
  @PrimaryColumn({ type: 'bigint', name: 'ProductReceiverSourceID' })
  productReceiverSourceID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'smallint', name: 'SourceType' })
  sourceType: number;

  @Column({ type: 'bigint', name: 'ComplexRef', nullable: true })
  complexRef: number | null;

  @Column({ type: 'bigint', name: 'ProductionUnitRef', nullable: true })
  productionUnitRef: number | null;

  @Column({ type: 'bigint', name: 'ProductionUnitSectionRef', nullable: true })
  productionUnitSectionRef: number | null;

  @Column({ type: 'bigint', name: 'SourceRef', nullable: true })
  sourceRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ActivationDate' })
  activationDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}