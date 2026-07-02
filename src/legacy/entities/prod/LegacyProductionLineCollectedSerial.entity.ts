import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionLineCollectedSerial' })
export class LegacyProductionLineCollectedSerial {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionLineCollectedSerialID' })
  productionLineCollectedSerialID: number;

  @Column({ type: 'bigint', name: 'ProductionOrderRef', nullable: true })
  productionOrderRef: number | null;

  @Column({ type: 'bigint', name: 'TerminalRef' })
  terminalRef: number;

  @Column({ type: 'bigint', name: 'ProductSerialRef', nullable: true })
  productSerialRef: number | null;

  @Column({ type: 'bigint', name: 'JointSerialRef', nullable: true })
  jointSerialRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CollectedTime' })
  collectedTime: Date;

  @Column({ type: 'integer', name: 'SerialType' })
  serialType: number;

  @Column({ type: 'integer', name: 'SerialAction', nullable: true })
  serialAction: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'SerialProductionLineRef' })
  serialProductionLineRef: number;

  @Column({ type: 'bigint', name: 'NewProductSerialRef', nullable: true })
  newProductSerialRef: number | null;

}