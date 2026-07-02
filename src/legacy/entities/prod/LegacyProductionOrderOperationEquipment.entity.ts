import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrderOperationEquipment' })
export class LegacyProductionOrderOperationEquipment {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderOperationEquipmentID' })
  productionOrderOperationEquipmentID: number;

  @Column({ type: 'bigint', name: 'ProductionOrderOperationRef' })
  productionOrderOperationRef: number;

  @Column({ type: 'bigint', name: 'EquipmentRef' })
  equipmentRef: number;

  @Column({ type: 'boolean', name: 'Selected' })
  selected: boolean;

  @Column({ type: 'timestamp without time zone', name: 'StartDateTime', nullable: true })
  startDateTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDateTime', nullable: true })
  endDateTime: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}