import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotEffectivePoliciesOnTaxOrToll' })
export class LegacyNotEffectivePoliciesOnTaxOrToll {
  @PrimaryColumn({ type: 'bigint', name: 'NotEffectivePoliciesOnTaxOrTollID' })
  notEffectivePoliciesOnTaxOrTollID: number;

}