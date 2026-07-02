import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListResultRow' })
export class LegacyPriceListResultRow {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListResultRowID' })
  priceListResultRowID: number;

  @Column({ type: 'bigint', name: 'PriceListRef' })
  priceListRef: number;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'GroupCustomerRef', nullable: true })
  groupCustomerRef: number | null;

  @Column({ type: 'bigint', name: 'RouteRef', nullable: true })
  routeRef: number | null;

  @Column({ type: 'bigint', name: 'BrokerRef', nullable: true })
  brokerRef: number | null;

  @Column({ type: 'bigint', name: 'SalesGroupRef', nullable: true })
  salesGroupRef: number | null;

  @Column({ type: 'bigint', name: 'PaymentAgreementRef', nullable: true })
  paymentAgreementRef: number | null;

  @Column({ type: 'bigint', name: 'TermOfDeliveryRef', nullable: true })
  termOfDeliveryRef: number | null;

  @Column({ type: 'bigint', name: 'SalesTerritoryRef', nullable: true })
  salesTerritoryRef: number | null;

  @Column({ type: 'bigint', name: 'SalesOfficeRef', nullable: true })
  salesOfficeRef: number | null;

  @Column({ type: 'bigint', name: 'DivisionRef', nullable: true })
  divisionRef: number | null;

  @Column({ type: 'bigint', name: 'SalesChannelRef', nullable: true })
  salesChannelRef: number | null;

  @Column({ type: 'bigint', name: 'SalesOrganizationRef', nullable: true })
  salesOrganizationRef: number | null;

  @Column({ type: 'bigint', name: 'SalesAreaRef', nullable: true })
  salesAreaRef: number | null;

  @Column({ type: 'bigint', name: 'ShippingPointRef', nullable: true })
  shippingPointRef: number | null;

  @Column({ type: 'bigint', name: 'PlantRef', nullable: true })
  plantRef: number | null;

  @Column({ type: 'bigint', name: 'SalesTypeRef', nullable: true })
  salesTypeRef: number | null;

  @Column({ type: 'bigint', name: 'TermOfPaymentRef', nullable: true })
  termOfPaymentRef: number | null;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef', nullable: true })
  regionalDivisionRef: number | null;

  @Column({ type: 'bigint', name: 'ProductPackRef', nullable: true })
  productPackRef: number | null;

  @Column({ type: 'bigint', name: 'DistributorRef', nullable: true })
  distributorRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}