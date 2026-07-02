import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Correspondent' })
export class LegacyCorrespondent {
  @PrimaryColumn({ type: 'bigint', name: 'CorrespondentID' })
  correspondentID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'bigint', name: 'PostRef', nullable: true })
  postRef: number | null;

  @Column({ type: 'bigint', name: 'DepartmentRef', nullable: true })
  departmentRef: number | null;

  @Column({ type: 'bigint', name: 'EmployeeStatuteRef', nullable: true })
  employeeStatuteRef: number | null;

  @Column({ type: 'bigint', name: 'EmployeeStatuteTempPostRef', nullable: true })
  employeeStatuteTempPostRef: number | null;

  @Column({ type: 'bigint', name: 'CompanyPartyRef', nullable: true })
  companyPartyRef: number | null;

  @Column({ type: 'bigint', name: 'PositionRef', nullable: true })
  positionRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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