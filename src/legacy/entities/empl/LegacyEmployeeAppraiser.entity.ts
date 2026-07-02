import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeAppraiser' })
export class LegacyEmployeeAppraiser {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeAppraiserID' })
  employeeAppraiserID: number;

  @Column({ type: 'character varying', name: 'AdvancedFilterExpression', nullable: true })
  advancedFilterExpression: string | null;

  @Column({ type: 'character varying', name: 'InlineFilterExpression', nullable: true })
  inlineFilterExpression: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}