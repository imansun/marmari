import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceEquipmentHistory' })
export class LegacyServiceEquipmentHistory {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceEquipmentHistoryID' })
  serviceEquipmentHistoryID: number;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveServiceDate', nullable: true })
  effectiveServiceDate: Date | null;

  @Column({ type: 'bigint', name: 'ServiceEquipmentRef' })
  serviceEquipmentRef: number;

  @Column({ type: 'bigint', name: 'EquipmentRef' })
  equipmentRef: number;

  @Column({ type: 'bigint', name: 'BomItemRef', nullable: true })
  bomItemRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}