import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Department' })
export class LegacyDepartment {
  @PrimaryColumn({ type: 'bigint', name: 'DepartmentID' })
  departmentID: number;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'AbbrSign', nullable: true })
  abbrSign: string | null;

  @Column({ type: 'integer', name: 'BusinessDomainCode', nullable: true })
  businessDomainCode: number | null;

  @Column({ type: 'integer', name: 'DepartmentTypeCode', nullable: true })
  departmentTypeCode: number | null;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef', nullable: true })
  regionalDivisionRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'timestamp without time zone', name: 'StatusChangeDate', nullable: true })
  statusChangeDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'character varying', name: 'UniqueCode', nullable: true })
  uniqueCode: string | null;

  @Column({ type: 'integer', name: 'Extra1Code', nullable: true })
  extra1Code: number | null;

  @Column({ type: 'integer', name: 'Extra2Code', nullable: true })
  extra2Code: number | null;

  @Column({ type: 'integer', name: 'Extra3Code', nullable: true })
  extra3Code: number | null;

  @Column({ type: 'character varying', name: 'AbbrName', nullable: true })
  abbrName: string | null;

}