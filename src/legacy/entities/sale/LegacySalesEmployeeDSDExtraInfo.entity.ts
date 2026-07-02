import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesEmployeeDSDExtraInfo' })
export class LegacySalesEmployeeDSDExtraInfo {
  @PrimaryColumn({ type: 'bigint', name: 'SalesEmployeeDSDExtraInfoID' })
  salesEmployeeDSDExtraInfoID: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'boolean', name: 'CannotRegisterSaleRequestsWithoutTourInfo', nullable: true })
  cannotRegisterSaleRequestsWithoutTourInfo: boolean | null;

  @Column({ type: 'integer', name: 'MaxUnPlannedSalesRequestPerTour', nullable: true })
  maxUnPlannedSalesRequestPerTour: number | null;

  @Column({ type: 'boolean', name: 'AutomaticCollectionListGenerationForTourCustomers', nullable: true })
  automaticCollectionListGenerationForTourCustomers: boolean | null;

  @Column({ type: 'numeric', name: 'MaxUnPlannedSalesRequestPricePerTour', nullable: true })
  maxUnPlannedSalesRequestPricePerTour: number | null;

  @Column({ type: 'bigint', name: 'MaxUnPlannedSalesRequestCurrencyRef', nullable: true })
  maxUnPlannedSalesRequestCurrencyRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}