import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicyEnforcementProcedure' })
export class LegacyBusinessPolicyEnforcementProcedure {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyEnforcementProcedureID' })
  businessPolicyEnforcementProcedureID: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'character varying', name: 'Concept' })
  concept: string;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}