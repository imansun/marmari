import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaterialControlPolicyItem' })
export class LegacyMaterialControlPolicyItem {
  @PrimaryColumn({ type: 'bigint', name: 'MaterialControlPolicyItemID' })
  materialControlPolicyItemID: number;

  @Column({ type: 'bigint', name: 'MaterialControlPolicyRef' })
  materialControlPolicyRef: number;

  @Column({ type: 'integer', name: 'ConditionType', default: 1 })
  conditionType: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef', nullable: true })
  characteristicRef: number | null;

  @Column({ type: 'integer', name: 'Operator', nullable: true })
  operator: number | null;

  @Column({ type: 'character varying', name: 'CharacteristicValue', nullable: true })
  characteristicValue: string | null;

  @Column({ type: 'character varying', name: 'DynamicValue', nullable: true })
  dynamicValue: string | null;

  @Column({ type: 'numeric', name: 'StockValue', nullable: true })
  stockValue: number | null;

  @Column({ type: 'integer', name: 'SortType', nullable: true })
  sortType: number | null;

  @Column({ type: 'integer', name: 'GroupNumber' })
  groupNumber: number;

  @Column({ type: 'integer', name: 'GroupDetailNumber', default: 1 })
  groupDetailNumber: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}