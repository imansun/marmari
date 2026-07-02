import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeStatuteRequest' })
export class LegacyEmployeeStatuteRequest {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteRequestID' })
  employeeStatuteRequestID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'StatuteTypeRef' })
  statuteTypeRef: number;

  @Column({ type: 'integer', name: 'ReferenceCode' })
  referenceCode: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate' })
  issueDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ApplyDate' })
  applyDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'Automatic' })
  automatic: boolean;

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

  @Column({ type: 'bigint', name: 'PromotionProcessRef', nullable: true })
  promotionProcessRef: number | null;

}