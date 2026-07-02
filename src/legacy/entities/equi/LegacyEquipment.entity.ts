import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Equipment' })
export class LegacyEquipment {
  @PrimaryColumn({ type: 'bigint', name: 'EquipmentID' })
  equipmentID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'boolean', name: 'IsMovable' })
  isMovable: boolean;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bigint', name: 'WorkCenterRef', nullable: true })
  workCenterRef: number | null;

  @Column({ type: 'integer', name: 'AlternationGroup', nullable: true })
  alternationGroup: number | null;

  @Column({ type: 'bigint', name: 'CostCenterRef' })
  costCenterRef: number;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'ParentEquipmentRef', nullable: true })
  parentEquipmentRef: number | null;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'ResponsibleWorkCenterRef', nullable: true })
  responsibleWorkCenterRef: number | null;

  @Column({ type: 'bigint', name: 'ResponsiblePartyRef', nullable: true })
  responsiblePartyRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartUpDate', nullable: true })
  startUpDate: Date | null;

  @Column({ type: 'integer', name: 'ABCIndicator', nullable: true })
  aBCIndicator: number | null;

  @Column({ type: 'timestamp without time zone', name: 'InstallDismantleDate', nullable: true })
  installDismantleDate: Date | null;

  @Column({ type: 'integer', name: 'InstallDismantleReason', nullable: true })
  installDismantleReason: number | null;

  @Column({ type: 'integer', name: 'ShowingPriority', nullable: true })
  showingPriority: number | null;

  @Column({ type: 'integer', name: 'Left' })
  left: number;

  @Column({ type: 'integer', name: 'Right' })
  right: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'NfcIdentity', nullable: true })
  nfcIdentity: string | null;

}