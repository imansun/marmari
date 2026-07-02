import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShoppingCartItemToContractItemMap' })
export class LegacyShoppingCartItemToContractItemMap {
  @PrimaryColumn({ type: 'bigint', name: 'ShoppingCartItemToContractItemMap' })
  shoppingCartItemToContractItemMap: number;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'bigint', name: 'ContractItemRef' })
  contractItemRef: number;

  @Column({ type: 'bigint', name: 'ShoppingCartItemRef' })
  shoppingCartItemRef: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}