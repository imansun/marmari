import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Employee' })
export class LegacyEmployee {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeID' })
  employeeID: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'WorkIDNumber', nullable: true })
  workIDNumber: string | null;

  @Column({ type: 'character varying', name: 'EmploymentNumber', nullable: true })
  employmentNumber: string | null;

  @Column({ type: 'integer', name: 'MilitaryServiceStatusCode', nullable: true })
  militaryServiceStatusCode: number | null;

  @Column({ type: 'integer', name: 'MilitaryUnitCode', nullable: true })
  militaryUnitCode: number | null;

  @Column({ type: 'integer', name: 'MilitaryBranchCode', nullable: true })
  militaryBranchCode: number | null;

  @Column({ type: 'integer', name: 'ExemptionTypeCode', nullable: true })
  exemptionTypeCode: number | null;

  @Column({ type: 'timestamp without time zone', name: 'MilitaryStartDate', nullable: true })
  militaryStartDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'MilitaryEndDate', nullable: true })
  militaryEndDate: Date | null;

  @Column({ type: 'integer', name: 'MilitaryDuration', nullable: true })
  militaryDuration: number | null;

  @Column({ type: 'integer', name: 'MilitaryEducationDegreeCode', nullable: true })
  militaryEducationDegreeCode: number | null;

  @Column({ type: 'bytea', name: 'MilitaryAttachment', nullable: true })
  militaryAttachment: Buffer | null;

  @Column({ type: 'character varying', name: 'MilitaryAttachmentFileName', nullable: true })
  militaryAttachmentFileName: string | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

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

  @Column({ type: 'character varying', name: 'MailAttachmentPassword', nullable: true })
  mailAttachmentPassword: string | null;

  @Column({ type: 'integer', name: 'MonthLengthType', nullable: true })
  monthLengthType: number | null;

  @Column({ type: 'character varying', name: 'FirstName' })
  firstName: string;

  @Column({ type: 'character varying', name: 'LastName' })
  lastName: string;

  @Column({ type: 'timestamp without time zone', name: 'DeathDate', nullable: true })
  deathDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'DeathAnnouncingDate', nullable: true })
  deathAnnouncingDate: Date | null;

  @Column({ type: 'character varying', name: 'FullName' })
  fullName: string;

}