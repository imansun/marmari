import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MissionDocument' })
export class LegacyMissionDocument {
  @PrimaryColumn({ type: 'bigint', name: 'MissionDocumentID' })
  missionDocumentID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'DispatchingDepartmentRef', nullable: true })
  dispatchingDepartmentRef: number | null;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'bigint', name: 'BatchMissionDocumentRef', nullable: true })
  batchMissionDocumentRef: number | null;

  @Column({ type: 'bigint', name: 'MissionTypeRef' })
  missionTypeRef: number;

  @Column({ type: 'integer', name: 'TravelTypeCode', nullable: true })
  travelTypeCode: number | null;

  @Column({ type: 'integer', name: 'AccommodationTypeCode', nullable: true })
  accommodationTypeCode: number | null;

  @Column({ type: 'bigint', name: 'SourceRef', nullable: true })
  sourceRef: number | null;

  @Column({ type: 'bigint', name: 'DestinationRef', nullable: true })
  destinationRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'FromDateTime' })
  fromDateTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDateTime' })
  toDateTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExtensionDateTime' })
  extensionDateTime: Date;

  @Column({ type: 'integer', name: 'DurationDays', nullable: true })
  durationDays: number | null;

  @Column({ type: 'integer', name: 'DurationMinutes', nullable: true })
  durationMinutes: number | null;

  @Column({ type: 'integer', name: 'Distance', nullable: true })
  distance: number | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bigint', name: 'OfficialConfirmerEmployeeRef', nullable: true })
  officialConfirmerEmployeeRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'OfficialConfirmationDateTime', nullable: true })
  officialConfirmationDateTime: Date | null;

  @Column({ type: 'character varying', name: 'OfficialConfirmationNumber', nullable: true })
  officialConfirmationNumber: string | null;

  @Column({ type: 'bigint', name: 'FinancialConfirmerEmployeeRef', nullable: true })
  financialConfirmerEmployeeRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'FinancialConfirmationDateTime', nullable: true })
  financialConfirmationDateTime: Date | null;

  @Column({ type: 'character varying', name: 'FinancialConfirmationNumber', nullable: true })
  financialConfirmationNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate' })
  issueDate: Date;

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

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

}