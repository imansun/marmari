import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkOrder' })
export class LegacyWorkOrder {
  @PrimaryColumn({ type: 'bigint', name: 'WorkOrderID' })
  workOrderID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'EquipmentRef', nullable: true })
  equipmentRef: number | null;

  @Column({ type: 'bigint', name: 'BomAssemblyRef', nullable: true })
  bomAssemblyRef: number | null;

  @Column({ type: 'bigint', name: 'ServiceRef', nullable: true })
  serviceRef: number | null;

  @Column({ type: 'integer', name: 'Priority', nullable: true })
  priority: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'character varying', name: 'ReferenceNumber', nullable: true })
  referenceNumber: string | null;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'ResponsibleWorkCenterRef', nullable: true })
  responsibleWorkCenterRef: number | null;

  @Column({ type: 'bigint', name: 'ResponsiblePartyRef', nullable: true })
  responsiblePartyRef: number | null;

  @Column({ type: 'boolean', name: 'IsLegacy' })
  isLegacy: boolean;

  @Column({ type: 'bigint', name: 'ParentWorkOrderRef', nullable: true })
  parentWorkOrderRef: number | null;

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

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'integer', name: 'Risk', nullable: true })
  risk: number | null;

}