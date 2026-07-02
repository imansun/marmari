import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformanceManagementProcess' })
export class LegacyPerformanceManagementProcess {
  @PrimaryColumn({ type: 'bigint', name: 'PerformanceManagementProcessID' })
  performanceManagementProcessID: number;

  @Column({ type: 'bigint', name: 'EmployeeConditionRef', nullable: true })
  employeeConditionRef: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'IsOKR' })
  isOKR: boolean;

  @Column({ type: 'boolean', name: 'IsSMART' })
  isSMART: boolean;

  @Column({ type: 'boolean', name: 'IsObjective' })
  isObjective: boolean;

  @Column({ type: 'boolean', name: 'IsCompetency' })
  isCompetency: boolean;

  @Column({ type: 'boolean', name: 'IsWeight' })
  isWeight: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}