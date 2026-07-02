import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FreeProductDiscountPolicy' })
export class LegacyFreeProductDiscountPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'FreeProductDiscountPolicyID' })
  freeProductDiscountPolicyID: number;

  @Column({ type: 'bigint', name: 'FreeProductBusinessPolicyRef' })
  freeProductBusinessPolicyRef: number;

  @Column({ type: 'bigint', name: 'DiscountBusinessPolicyRef' })
  discountBusinessPolicyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}