import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeMarriageChangeRequest' })
export class LegacyEmployeeMarriageChangeRequest {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeMarriageChangeRequestID' })
  employeeMarriageChangeRequestID: number;

  @Column({ type: 'integer', name: 'StatusCode' })
  statusCode: number;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'EmployeeMarriageRef' })
  employeeMarriageRef: number;

  @Column({ type: 'bigint', name: 'EmployeeInfoChangeRequestRef' })
  employeeInfoChangeRequestRef: number;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

}