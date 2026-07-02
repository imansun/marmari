import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShoppingCartItem' })
export class LegacyShoppingCartItem {
  @PrimaryColumn({ type: 'bigint', name: 'ShoppingCartItemID' })
  shoppingCartItemID: number;

  @Column({ type: 'bigint', name: 'SelfServiceUserRef' })
  selfServiceUserRef: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef', nullable: true })
  salesOfficeRef: number | null;

  @Column({ type: 'bigint', name: 'SalesAreaRef', nullable: true })
  salesAreaRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'integer', name: 'PayerType' })
  payerType: number;

  @Column({ type: 'bigint', name: 'SalesTypeRef', nullable: true })
  salesTypeRef: number | null;

  @Column({ type: 'bigint', name: 'PayerAccountRef', nullable: true })
  payerAccountRef: number | null;

  @Column({ type: 'bigint', name: 'PaymentAgreementRef', nullable: true })
  paymentAgreementRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'bigint', name: 'PlantRef', nullable: true })
  plantRef: number | null;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

  @Column({ type: 'bigint', name: 'ContractItemRef', nullable: true })
  contractItemRef: number | null;

  @Column({ type: 'bigint', name: 'OneTimeCustomerRef', nullable: true })
  oneTimeCustomerRef: number | null;

}