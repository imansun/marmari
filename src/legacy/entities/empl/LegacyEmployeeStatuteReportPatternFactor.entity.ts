import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeStatuteReportPatternFactor' })
export class LegacyEmployeeStatuteReportPatternFactor {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteReportPatternFactorID' })
  employeeStatuteReportPatternFactorID: number;

  @Column({ type: 'bigint', name: 'EmployeeStatuteReportPatternRef' })
  employeeStatuteReportPatternRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'PrimaryStatuteFactorRef' })
  primaryStatuteFactorRef: number;

  @Column({ type: 'bigint', name: 'SecondaryStatuteFactorRef', nullable: true })
  secondaryStatuteFactorRef: number | null;

  @Column({ type: 'boolean', name: 'IsVisibleInBasePaySection', nullable: true })
  isVisibleInBasePaySection: boolean | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}