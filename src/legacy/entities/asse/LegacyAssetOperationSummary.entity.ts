import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetOperationSummary' })
export class LegacyAssetOperationSummary {
  @PrimaryColumn({ type: 'bigint', name: 'AssetOperationSummaryID' })
  assetOperationSummaryID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'CostCenterRef' })
  costCenterRef: number;

  @Column({ type: 'bigint', name: 'AssetGroupRef' })
  assetGroupRef: number;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef' })
  settlementPlaceRef: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'numeric', name: 'InitialCost', default: 0 })
  initialCost: number;

  @Column({ type: 'numeric', name: 'AcquisitionReceiptCost', default: 0 })
  acquisitionReceiptCost: number;

  @Column({ type: 'numeric', name: 'MaintenanceCost', default: 0 })
  maintenanceCost: number;

  @Column({ type: 'numeric', name: 'ChangeCost', default: 0 })
  changeCost: number;

  @Column({ type: 'numeric', name: 'RevaluationCost', default: 0 })
  revaluationCost: number;

  @Column({ type: 'numeric', name: 'SalesCost', default: 0 })
  salesCost: number;

  @Column({ type: 'numeric', name: 'EliminationCost', default: 0 })
  eliminationCost: number;

  @Column({ type: 'numeric', name: 'DonationCost', default: 0 })
  donationCost: number;

  @Column({ type: 'numeric', name: 'ExitFromOrganizationCost', default: 0 })
  exitFromOrganizationCost: number;

  @Column({ type: 'numeric', name: 'TransferInCost', default: 0 })
  transferInCost: number;

  @Column({ type: 'numeric', name: 'TransferOutCost', default: 0 })
  transferOutCost: number;

  @Column({ type: 'numeric', name: 'InitialDepreciation', default: 0 })
  initialDepreciation: number;

  @Column({ type: 'numeric', name: 'AcquisitionReceiptDepreciation', default: 0 })
  acquisitionReceiptDepreciation: number;

  @Column({ type: 'numeric', name: 'CalculatedDepreciation', default: 0 })
  calculatedDepreciation: number;

  @Column({ type: 'numeric', name: 'MaintenanceDepreciation', default: 0 })
  maintenanceDepreciation: number;

  @Column({ type: 'numeric', name: 'ChangeCostDepreciationAdjustment', default: 0 })
  changeCostDepreciationAdjustment: number;

  @Column({ type: 'numeric', name: 'ChangeRateDepreciationAdjustment', default: 0 })
  changeRateDepreciationAdjustment: number;

  @Column({ type: 'numeric', name: 'TransferInDepreciation', default: 0 })
  transferInDepreciation: number;

  @Column({ type: 'numeric', name: 'TransferOutDepreciation', default: 0 })
  transferOutDepreciation: number;

  @Column({ type: 'numeric', name: 'SalesDepreciation', default: 0 })
  salesDepreciation: number;

  @Column({ type: 'numeric', name: 'EliminationDepreciation', default: 0 })
  eliminationDepreciation: number;

  @Column({ type: 'numeric', name: 'DonationDepreciation', default: 0 })
  donationDepreciation: number;

  @Column({ type: 'numeric', name: 'ExitFromOrganizationDepreciation', default: 0 })
  exitFromOrganizationDepreciation: number;

  @Column({ type: 'numeric', name: 'ScrapDepreciation', default: 0 })
  scrapDepreciation: number;

  @Column({ type: 'numeric', name: 'FromOtherOrganizationDepreciation', default: 0 })
  fromOtherOrganizationDepreciation: number;

  @Column({ type: 'numeric', name: 'ChangeCostDepreciationAdjustmentPreviousFiscal', default: 0 })
  changeCostDepreciationAdjustmentPreviousFiscal: number;

  @Column({ type: 'numeric', name: 'RemainingRevaluationSurplus', default: 0 })
  remainingRevaluationSurplus: number;

}