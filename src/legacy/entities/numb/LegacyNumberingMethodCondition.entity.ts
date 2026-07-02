import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NumberingMethodCondition' })
export class LegacyNumberingMethodCondition {
  @PrimaryColumn({ type: 'bigint', name: 'NumberingMethodConditionID' })
  numberingMethodConditionID: number;

  @Column({ type: 'bigint', name: 'NumberingMethodRef' })
  numberingMethodRef: number;

  @Column({ type: 'character varying', name: 'EntityAttributeName' })
  entityAttributeName: string;

  @Column({ type: 'integer', name: 'OperatorType' })
  operatorType: number;

  @Column({ type: 'character varying', name: 'EntityAttributeValues' })
  entityAttributeValues: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}