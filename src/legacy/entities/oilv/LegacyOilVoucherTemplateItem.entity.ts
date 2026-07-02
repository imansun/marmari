import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OilVoucherTemplateItem' })
export class LegacyOilVoucherTemplateItem {
  @PrimaryColumn({ type: 'bigint', name: 'OilVoucherTemplateItemID' })
  oilVoucherTemplateItemID: number;

  @Column({ type: 'bigint', name: 'OilVoucherTemplateRef' })
  oilVoucherTemplateRef: number;

  @Column({ type: 'character varying', name: 'FactorCode' })
  factorCode: string;

  @Column({ type: 'character varying', name: 'EmploymentType', nullable: true })
  employmentType: string | null;

  @Column({ type: 'character varying', name: 'CostCenter', nullable: true })
  costCenter: string | null;

  @Column({ type: 'character varying', name: 'EmployeeDL', nullable: true })
  employeeDL: string | null;

  @Column({ type: 'character varying', name: 'EmploymentStatus', nullable: true })
  employmentStatus: string | null;

  @Column({ type: 'character varying', name: 'EmploymentGroup', nullable: true })
  employmentGroup: string | null;

  @Column({ type: 'character varying', name: 'Fund', nullable: true })
  fund: string | null;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'boolean', name: 'HasReverse' })
  hasReverse: boolean;

  @Column({ type: 'boolean', name: 'IsPositive' })
  isPositive: boolean;

  @Column({ type: 'boolean', name: 'IsDifference' })
  isDifference: boolean;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

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

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}