import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesPolicyDocumentExtraProperty' })
export class LegacySalesPolicyDocumentExtraProperty {
  @PrimaryColumn({ type: 'bigint', name: 'SalesPolicyDocumentExtraPropertyID' })
  salesPolicyDocumentExtraPropertyID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'integer', name: 'SalesDocumentEntityCode' })
  salesDocumentEntityCode: number;

  @Column({ type: 'boolean', name: 'TransferToAmend' })
  transferToAmend: boolean;

  @Column({ type: 'boolean', name: 'Recalculate' })
  recalculate: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}