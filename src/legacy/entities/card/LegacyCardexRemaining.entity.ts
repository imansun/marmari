import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CardexRemaining' })
export class LegacyCardexRemaining {
  @PrimaryColumn({ type: 'bigint', name: 'ID' })
  iD: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef', nullable: true })
  fiscalYearRef: number | null;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'integer', name: 'CardexItemType' })
  cardexItemType: number;

  @Column({ type: 'integer', name: 'TypeOfEffectOnStock' })
  typeOfEffectOnStock: number;

  @Column({ type: 'character varying', name: 'TrackingFactorValue1', nullable: true })
  trackingFactorValue1: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactorValue2', nullable: true })
  trackingFactorValue2: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactorValue3', nullable: true })
  trackingFactorValue3: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactorValue4', nullable: true })
  trackingFactorValue4: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactorValue5', nullable: true })
  trackingFactorValue5: string | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef1', nullable: true })
  partTrackingFactorRef1: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef2', nullable: true })
  partTrackingFactorRef2: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef3', nullable: true })
  partTrackingFactorRef3: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef4', nullable: true })
  partTrackingFactorRef4: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef5', nullable: true })
  partTrackingFactorRef5: number | null;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'SecondUnitQuantity', nullable: true })
  secondUnitQuantity: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}