import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentExtension' })
export class LegacyEquipmentExtension {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentExtensionID' })
  equipmentExtensionID: number;

  @Column({ type: 'bigint', name: 'EquipmentRef' })
  equipmentRef: number;

  @Column({ type: 'bigint', name: 'BomRef', nullable: true })
  bomRef: number | null;

  @Column({ type: 'bigint', name: 'ParentBomItemRef', nullable: true })
  parentBomItemRef: number | null;

  @Column({ type: 'bigint', name: 'FactoryCalendarRef', nullable: true })
  factoryCalendarRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}