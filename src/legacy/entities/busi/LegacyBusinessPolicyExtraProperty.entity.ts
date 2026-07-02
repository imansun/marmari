import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicyExtraProperty' })
export class LegacyBusinessPolicyExtraProperty {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyExtraPropertyID' })
  businessPolicyExtraPropertyID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'boolean', name: 'AllowStopTransfer' })
  allowStopTransfer: boolean;

}