import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicyConditionRowQuota' })
export class LegacyBusinessPolicyConditionRowQuota {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyConditionRowQuotaID' })
  businessPolicyConditionRowQuotaID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'numeric', name: 'MinValue', nullable: true })
  minValue: number | null;

  @Column({ type: 'numeric', name: 'MaxValue', nullable: true })
  maxValue: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}