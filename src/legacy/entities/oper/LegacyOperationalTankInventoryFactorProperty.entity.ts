import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OperationalTankInventoryFactorProperty' })
export class LegacyOperationalTankInventoryFactorProperty {
  @PrimaryColumn({ type: 'bigint', name: 'OperationalTankInventoryFactorPropertyID' })
  operationalTankInventoryFactorPropertyID: number;

  @Column({ type: 'bigint', name: 'OperationalTankInventoryFactorRef' })
  operationalTankInventoryFactorRef: number;

  @Column({ type: 'bigint', name: 'TankRef' })
  tankRef: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

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