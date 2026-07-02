import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialValidationCondition' })
export class LegacySerialValidationCondition {
  @PrimaryColumn({ type: 'bigint', name: 'SerialValidationConditionID' })
  serialValidationConditionID: number;

  @Column({ type: 'bigint', name: 'SerialValidationRef' })
  serialValidationRef: number;

  @Column({ type: 'integer', name: 'GroupCode' })
  groupCode: number;

  @Column({ type: 'integer', name: 'Operator' })
  operator: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'StartIndex', nullable: true })
  startIndex: number | null;

  @Column({ type: 'integer', name: 'Length', nullable: true })
  length: number | null;

}