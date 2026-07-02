import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceOperationSubcontract' })
export class LegacyServiceOperationSubcontract {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceOperationSubcontractID' })
  serviceOperationSubcontractID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'integer', name: 'SubcontractType', nullable: true })
  subcontractType: number | null;

  @Column({ type: 'bigint', name: 'ServiceOperationRef' })
  serviceOperationRef: number;

  @Column({ type: 'boolean', name: 'PurchaseRequestAutomaticIssue' })
  purchaseRequestAutomaticIssue: boolean;

  @Column({ type: 'bigint', name: 'PurchaseItemRef', nullable: true })
  purchaseItemRef: number | null;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'bigint', name: 'SupplierRef', nullable: true })
  supplierRef: number | null;

  @Column({ type: 'integer', name: 'CounterPartEntityType', nullable: true })
  counterPartEntityType: number | null;

  @Column({ type: 'bigint', name: 'CounterPartEntityRef', nullable: true })
  counterPartEntityRef: number | null;

  @Column({ type: 'integer', name: 'PurchaseRequestType', nullable: true })
  purchaseRequestType: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

}