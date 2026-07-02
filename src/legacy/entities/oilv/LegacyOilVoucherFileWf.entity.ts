import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OilVoucherFileWf' })
export class LegacyOilVoucherFileWf {
  @PrimaryColumn({ type: 'bigint', name: 'OilVoucherFileWfID' })
  oilVoucherFileWfID: number;

  @Column({ type: 'bigint', name: 'OilVoucherFileRef' })
  oilVoucherFileRef: number;

  @Column({ type: 'character varying', name: 'FactorCode' })
  factorCode: string;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'character varying', name: 'SLCode', nullable: true })
  sLCode: string | null;

  @Column({ type: 'bigint', name: 'DLTypeRef4', nullable: true })
  dLTypeRef4: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef5', nullable: true })
  dLTypeRef5: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef6', nullable: true })
  dLTypeRef6: number | null;

  @Column({ type: 'character varying', name: 'DLLevel4', nullable: true })
  dLLevel4: string | null;

  @Column({ type: 'character varying', name: 'DLLevel5', nullable: true })
  dLLevel5: string | null;

  @Column({ type: 'character varying', name: 'DLLevel6', nullable: true })
  dLLevel6: string | null;

  @Column({ type: 'numeric', name: 'Debit' })
  debit: number;

  @Column({ type: 'numeric', name: 'Credit' })
  credit: number;

  @Column({ type: 'character varying', name: 'EmployeeCode' })
  employeeCode: string;

  @Column({ type: 'character varying', name: 'EmploymentType', nullable: true })
  employmentType: string | null;

  @Column({ type: 'character varying', name: 'CostCenter', nullable: true })
  costCenter: string | null;

  @Column({ type: 'boolean', name: 'IsNetPrice' })
  isNetPrice: boolean;

  @Column({ type: 'character varying', name: 'Fund', nullable: true })
  fund: string | null;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'character varying', name: 'EmployeeDL', nullable: true })
  employeeDL: string | null;

  @Column({ type: 'character varying', name: 'EmploymentStatus', nullable: true })
  employmentStatus: string | null;

  @Column({ type: 'character varying', name: 'EmploymentGroup', nullable: true })
  employmentGroup: string | null;

  @Column({ type: 'character varying', name: 'ExtraInfos', nullable: true })
  extraInfos: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}