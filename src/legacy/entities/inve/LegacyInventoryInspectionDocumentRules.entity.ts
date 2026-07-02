import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryInspectionDocumentRules' })
export class LegacyInventoryInspectionDocumentRules {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryInspectionDocumentRulesID' })
  inventoryInspectionDocumentRulesID: number;

  @Column({ type: 'boolean', name: 'AutoReceiptPermitForDamageAmount', nullable: true })
  autoReceiptPermitForDamageAmount: boolean | null;

  @Column({ type: 'boolean', name: 'AutoReceiptPermitForConfirmedAmount', nullable: true })
  autoReceiptPermitForConfirmedAmount: boolean | null;

  @Column({ type: 'boolean', name: 'AutoIssuePermitForDamageAmount', nullable: true })
  autoIssuePermitForDamageAmount: boolean | null;

  @Column({ type: 'boolean', name: 'AutoPartRequestForSampleConsumption', nullable: true })
  autoPartRequestForSampleConsumption: boolean | null;

  @Column({ type: 'smallint', name: 'PartRequestType', nullable: true })
  partRequestType: number | null;

  @Column({ type: 'boolean', name: 'AutoReserveForLotSize', nullable: true })
  autoReserveForLotSize: boolean | null;

  @Column({ type: 'bigint', name: 'InspectionDocumentRulesRef' })
  inspectionDocumentRulesRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}