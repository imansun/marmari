import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentExtensionHistory' })
export class LegacyEquipmentExtensionHistory {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentExtensionHistoryID' })
  equipmentExtensionHistoryID: number;

  @Column({ type: 'bigint', name: 'EquipmentHistoryRef' })
  equipmentHistoryRef: number;

  @Column({ type: 'bigint', name: 'BomRef', nullable: true })
  bomRef: number | null;

  @Column({ type: 'bigint', name: 'ParentBomItemRef', nullable: true })
  parentBomItemRef: number | null;

  @Column({ type: 'bigint', name: 'FactoryCalendarRef', nullable: true })
  factoryCalendarRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}