import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MaintenanceExpendituresItem' })
export class LegacyMaintenanceExpendituresItem {
  @PrimaryColumn({ type: 'bigint', name: 'MaintenanceExpendituresItemID' })
  maintenanceExpendituresItemID: number;

  @Column({ type: 'bigint', name: 'MaintenanceExpendituresRef' })
  maintenanceExpendituresRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'bigint', name: 'ExpenditureClassRef' })
  expenditureClassRef: number;

  @Column({ type: 'bigint', name: 'AssetGroupRef' })
  assetGroupRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyAmount' })
  operationalCurrencyAmount: number;

  @Column({ type: 'numeric', name: 'IncrementDecrement' })
  incrementDecrement: number;

  @Column({ type: 'numeric', name: 'NetPurchaseAmount' })
  netPurchaseAmount: number;

  @Column({ type: 'numeric', name: 'Cost' })
  cost: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'integer', name: 'DealType' })
  dealType: number;

  @Column({ type: 'integer', name: 'ItemOrService' })
  itemOrService: number;

  @Column({ type: 'integer', name: 'MajorDiscriminator', nullable: true })
  majorDiscriminator: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'SecondDiscriminator', nullable: true })
  secondDiscriminator: number | null;

}