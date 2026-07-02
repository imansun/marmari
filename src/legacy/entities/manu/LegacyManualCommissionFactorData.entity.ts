import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ManualCommissionFactorData' })
export class LegacyManualCommissionFactorData {
  @PrimaryColumn({ type: 'bigint', name: 'ManualCommissionFactorDataID' })
  manualCommissionFactorDataID: number;

  @Column({ type: 'bigint', name: 'CalculationPeriodRef' })
  calculationPeriodRef: number;

  @Column({ type: 'integer', name: 'TargerType' })
  targerType: number;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'BrokerRef', nullable: true })
  brokerRef: number | null;

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