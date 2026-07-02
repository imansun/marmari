import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessInstanceTaskAssignment' })
export class LegacyProcessInstanceTaskAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessInstanceTaskAssignmentID' })
  processInstanceTaskAssignmentID: number;

  @Column({ type: 'bigint', name: 'ProcessInstanceTaskRef' })
  processInstanceTaskRef: number;

  @Column({ type: 'bigint', name: 'ProcessInstanceTaskDeliveryRef' })
  processInstanceTaskDeliveryRef: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}