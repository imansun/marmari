import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionOperation' })
export class LegacyInspectionOperation {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionOperationID' })
  inspectionOperationID: number;

  @Column({ type: 'bigint', name: 'InspectionRef' })
  inspectionRef: number;

  @Column({ type: 'integer', name: 'Number' })
  number: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bigint', name: 'OperationTypeRef', nullable: true })
  operationTypeRef: number | null;

  @Column({ type: 'bigint', name: 'WorkCenterRef', nullable: true })
  workCenterRef: number | null;

  @Column({ type: 'bigint', name: 'ResponsiblePartyRef', nullable: true })
  responsiblePartyRef: number | null;

  @Column({ type: 'integer', name: 'EquipmentStatus', nullable: true })
  equipmentStatus: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartTime', nullable: true })
  startTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndTime', nullable: true })
  endTime: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}