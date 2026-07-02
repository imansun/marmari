import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationRunIRPItem' })
export class LegacyCalculationRunIRPItem {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationRunIRPItemID' })
  calculationRunIRPItemID: number;

  @Column({ type: 'bigint', name: 'CalculationRunRef' })
  calculationRunRef: number;

  @Column({ type: 'bigint', name: 'IRPID' })
  iRPID: number;

  @Column({ type: 'character varying', name: 'IRPNumber', nullable: true })
  iRPNumber: string | null;

  @Column({ type: 'character varying', name: 'IRPTitle', nullable: true })
  iRPTitle: string | null;

  @Column({ type: 'integer', name: 'IRPState', nullable: true })
  iRPState: number | null;

  @Column({ type: 'character varying', name: 'IRPStateName', nullable: true })
  iRPStateName: string | null;

  @Column({ type: 'bigint', name: 'IRPPlantID', nullable: true })
  iRPPlantID: number | null;

  @Column({ type: 'character varying', name: 'IRPPlantName', nullable: true })
  iRPPlantName: string | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'bigint', name: 'IRPItemID', nullable: true })
  iRPItemID: number | null;

  @Column({ type: 'bigint', name: 'ItemPartID', nullable: true })
  itemPartID: number | null;

  @Column({ type: 'character varying', name: 'ItemPartCode', nullable: true })
  itemPartCode: string | null;

  @Column({ type: 'character varying', name: 'ItemPartName', nullable: true })
  itemPartName: string | null;

  @Column({ type: 'integer', name: 'ItemPeriodNo', nullable: true })
  itemPeriodNo: number | null;

  @Column({ type: 'numeric', name: 'ItemQuantity', nullable: true })
  itemQuantity: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'ItemUnitID', nullable: true })
  itemUnitID: number | null;

  @Column({ type: 'character varying', name: 'ItemUnitName', nullable: true })
  itemUnitName: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}