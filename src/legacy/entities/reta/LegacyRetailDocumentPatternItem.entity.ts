import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailDocumentPatternItem' })
export class LegacyRetailDocumentPatternItem {
  @PrimaryColumn({ type: 'bigint', name: 'RetailDocumentPatternItemID' })
  retailDocumentPatternItemID: number;

  @Column({ type: 'bigint', name: 'RetailDocumentPatternRef' })
  retailDocumentPatternRef: number;

  @Column({ type: 'boolean', name: 'IsSelected', default: true })
  isSelected: boolean;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'DefaultSalesAgentRef', nullable: true })
  defaultSalesAgentRef: number | null;

  @Column({ type: 'bigint', name: 'DefaultPayerType', nullable: true })
  defaultPayerType: number | null;

  @Column({ type: 'bigint', name: 'DefaultStoreRef', nullable: true })
  defaultStoreRef: number | null;

  @Column({ type: 'bigint', name: 'DefaultSettlementPolicyRef', nullable: true })
  defaultSettlementPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'DefaultSalesAreaRef', nullable: true })
  defaultSalesAreaRef: number | null;

  @Column({ type: 'bigint', name: 'DefaultCustomerRef', nullable: true })
  defaultCustomerRef: number | null;

  @Column({ type: 'bigint', name: 'ReturnReasonRef', nullable: true })
  returnReasonRef: number | null;

  @Column({ type: 'bigint', name: 'RejectingReasonRef', nullable: true })
  rejectingReasonRef: number | null;

  @Column({ type: 'bigint', name: 'ClosingReasonRef', nullable: true })
  closingReasonRef: number | null;

  @Column({ type: 'bigint', name: 'DefaultReceiverType', nullable: true })
  defaultReceiverType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'DefaultOfflineSettlementPolicyRef', nullable: true })
  defaultOfflineSettlementPolicyRef: number | null;

}