import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotEffectivePoliciesOnTaxOrTollWithDocument' })
export class LegacyNotEffectivePoliciesOnTaxOrTollWithDocument {
  @PrimaryColumn({ type: 'bigint', name: 'NotEffectivePoliciesOnTaxOrTollWithDocumentID' })
  notEffectivePoliciesOnTaxOrTollWithDocumentID: number;

  @Column({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number;

  @Column({ type: 'bigint', name: 'NotEffectivePoliciesOnTaxOrTollRef' })
  notEffectivePoliciesOnTaxOrTollRef: number;

}