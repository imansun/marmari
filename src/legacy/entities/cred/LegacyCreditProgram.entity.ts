import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CreditProgram' })
export class LegacyCreditProgram {
  @PrimaryColumn({ type: 'bigint', name: 'CreditProgramID' })
  creditProgramID: number;

  @Column({ type: 'integer', name: 'CreditProgramType' })
  creditProgramType: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'FromDate', nullable: true })
  fromDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ToDate', nullable: true })
  toDate: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'CompanyRef', nullable: true })
  companyRef: number | null;

  @Column({ type: 'numeric', name: 'Commission', nullable: true })
  commission: number | null;

  @Column({ type: 'integer', name: 'ValidationDays', nullable: true })
  validationDays: number | null;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

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

}