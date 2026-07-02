import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OperationalReportTankInventory' })
export class LegacyOperationalReportTankInventory {
  @PrimaryColumn({ type: 'bigint', name: 'OperationalReportTankInventoryID' })
  operationalReportTankInventoryID: number;

  @Column({ type: 'bigint', name: 'OperationalReportRef' })
  operationalReportRef: number;

  @Column({ type: 'bigint', name: 'TankAssignmentItemRef' })
  tankAssignmentItemRef: number;

  @Column({ type: 'numeric', name: 'TankInventoryQty', nullable: true })
  tankInventoryQty: number | null;

  @Column({ type: 'numeric', name: 'FinalTankInventoryQty', nullable: true })
  finalTankInventoryQty: number | null;

  @Column({ type: 'bigint', name: 'MassPartUnitRef' })
  massPartUnitRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}