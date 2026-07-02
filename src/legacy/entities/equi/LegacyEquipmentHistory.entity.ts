import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EquipmentHistory' })
export class LegacyEquipmentHistory {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentHistoryID' })
  equipmentHistoryID: number;

  @Column({ type: 'bigint', name: 'EquipmentRef' })
  equipmentRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterRef', nullable: true })
  workCenterRef: number | null;

  @Column({ type: 'bigint', name: 'CostCenterRef', nullable: true })
  costCenterRef: number | null;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'bigint', name: 'ParentEquipmentRef', nullable: true })
  parentEquipmentRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'InstallDismantleDate', nullable: true })
  installDismantleDate: Date | null;

  @Column({ type: 'integer', name: 'InstallDismantleReason', nullable: true })
  installDismantleReason: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PlantRef', nullable: true })
  plantRef: number | null;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bigint', name: 'ResponsiblePartyRef', nullable: true })
  responsiblePartyRef: number | null;

}