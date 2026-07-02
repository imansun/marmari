import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailDocumentPattern' })
export class LegacyRetailDocumentPattern {
  @PrimaryColumn({ type: 'bigint', name: 'RetailDocumentPatternID' })
  retailDocumentPatternID: number;

  @Column({ type: 'integer', name: 'RetailDocumentPatternType' })
  retailDocumentPatternType: number;

  @Column({ type: 'boolean', name: 'RegisterDocWithoutReference' })
  registerDocWithoutReference: boolean;

  @Column({ type: 'boolean', name: 'CanApproveOrderDocument', default: true })
  canApproveOrderDocument: boolean;

  @Column({ type: 'boolean', name: 'CanSuspendDocument', default: true })
  canSuspendDocument: boolean;

  @Column({ type: 'boolean', name: 'CanRejectDocument' })
  canRejectDocument: boolean;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'RegisterDocWithReference' })
  registerDocWithReference: boolean;

  @Column({ type: 'integer', name: 'OrderValidationDays', nullable: true })
  orderValidationDays: number | null;

  @Column({ type: 'integer', name: 'ProductReturnableDays', nullable: true })
  productReturnableDays: number | null;

  @Column({ type: 'bigint', name: 'BaseRetailDocumentPatternRef', nullable: true })
  baseRetailDocumentPatternRef: number | null;

  @Column({ type: 'boolean', name: 'SalesAgentInItem' })
  salesAgentInItem: boolean;

  @Column({ type: 'boolean', name: 'SalesAgentInHdr' })
  salesAgentInHdr: boolean;

  @Column({ type: 'boolean', name: 'SalesAgentVisibility' })
  salesAgentVisibility: boolean;

  @Column({ type: 'boolean', name: 'IsSalesAgentObligatory' })
  isSalesAgentObligatory: boolean;

  @Column({ type: 'boolean', name: 'PayerTypeInItem' })
  payerTypeInItem: boolean;

  @Column({ type: 'boolean', name: 'PayerTypeInHdr' })
  payerTypeInHdr: boolean;

  @Column({ type: 'boolean', name: 'PayerTypeVisibility' })
  payerTypeVisibility: boolean;

  @Column({ type: 'boolean', name: 'IsPayerTypeObligatory' })
  isPayerTypeObligatory: boolean;

  @Column({ type: 'boolean', name: 'StoreInHdr' })
  storeInHdr: boolean;

  @Column({ type: 'boolean', name: 'StoreInItm' })
  storeInItm: boolean;

  @Column({ type: 'boolean', name: 'StoreVisibility' })
  storeVisibility: boolean;

  @Column({ type: 'boolean', name: 'IsStoreObligatory' })
  isStoreObligatory: boolean;

  @Column({ type: 'boolean', name: 'ReceiverTypeInItem' })
  receiverTypeInItem: boolean;

  @Column({ type: 'boolean', name: 'ReceiverTypeVisibility' })
  receiverTypeVisibility: boolean;

  @Column({ type: 'boolean', name: 'ReceiverTypeInHdr' })
  receiverTypeInHdr: boolean;

  @Column({ type: 'boolean', name: 'IsReceiverTypeObligatory' })
  isReceiverTypeObligatory: boolean;

  @Column({ type: 'boolean', name: 'SettlementPolicyInHdr' })
  settlementPolicyInHdr: boolean;

  @Column({ type: 'boolean', name: 'SettlementPolicyInItm' })
  settlementPolicyInItm: boolean;

  @Column({ type: 'boolean', name: 'SettlementPolicyVisibility' })
  settlementPolicyVisibility: boolean;

  @Column({ type: 'boolean', name: 'IsSettlementPolicyObligatory' })
  isSettlementPolicyObligatory: boolean;

  @Column({ type: 'boolean', name: 'SalesAreaInItem' })
  salesAreaInItem: boolean;

  @Column({ type: 'boolean', name: 'SalesAreaVisibility' })
  salesAreaVisibility: boolean;

  @Column({ type: 'boolean', name: 'SalesAreaInHdr' })
  salesAreaInHdr: boolean;

  @Column({ type: 'boolean', name: 'IsSalesAreaObligatory' })
  isSalesAreaObligatory: boolean;

  @Column({ type: 'boolean', name: 'DefaultCustomerInHdr' })
  defaultCustomerInHdr: boolean;

  @Column({ type: 'boolean', name: 'IsDefaultCustomerObligatory' })
  isDefaultCustomerObligatory: boolean;

  @Column({ type: 'boolean', name: 'DefaultCustomerVisibility' })
  defaultCustomerVisibility: boolean;

  @Column({ type: 'boolean', name: 'ReturnReasonInItem' })
  returnReasonInItem: boolean;

  @Column({ type: 'boolean', name: 'ReturnReasonInHdr' })
  returnReasonInHdr: boolean;

  @Column({ type: 'boolean', name: 'ReturnReasonVisibility' })
  returnReasonVisibility: boolean;

  @Column({ type: 'boolean', name: 'IsReturnReasonObligatory' })
  isReturnReasonObligatory: boolean;

  @Column({ type: 'boolean', name: 'ClosingReasonVisibility' })
  closingReasonVisibility: boolean;

  @Column({ type: 'boolean', name: 'IsClosingReasonObligatory' })
  isClosingReasonObligatory: boolean;

  @Column({ type: 'boolean', name: 'RejectingReasonVisibility' })
  rejectingReasonVisibility: boolean;

  @Column({ type: 'boolean', name: 'IsRejectingReasonObligatory' })
  isRejectingReasonObligatory: boolean;

  @Column({ type: 'boolean', name: 'ClosingReasonInItem' })
  closingReasonInItem: boolean;

  @Column({ type: 'boolean', name: 'ClosingReasonInHdr' })
  closingReasonInHdr: boolean;

  @Column({ type: 'boolean', name: 'RejectingReasonInHdr' })
  rejectingReasonInHdr: boolean;

  @Column({ type: 'boolean', name: 'DeliveryDateInItem' })
  deliveryDateInItem: boolean;

  @Column({ type: 'boolean', name: 'DeliveryDateInHdr' })
  deliveryDateInHdr: boolean;

  @Column({ type: 'boolean', name: 'DeliveryDateVisibility' })
  deliveryDateVisibility: boolean;

  @Column({ type: 'boolean', name: 'IsDeliveryDateObligatory' })
  isDeliveryDateObligatory: boolean;

  @Column({ type: 'boolean', name: 'DeliveryAddressInItem' })
  deliveryAddressInItem: boolean;

  @Column({ type: 'boolean', name: 'DeliveryAddressInHdr' })
  deliveryAddressInHdr: boolean;

  @Column({ type: 'boolean', name: 'DeliveryAddressVisibility' })
  deliveryAddressVisibility: boolean;

  @Column({ type: 'boolean', name: 'IsDeliveryAddressObligatory' })
  isDeliveryAddressObligatory: boolean;

  @Column({ type: 'integer', name: 'ReceiverType', nullable: true })
  receiverType: number | null;

  @Column({ type: 'boolean', name: 'ApplicableForAllRetailShops' })
  applicableForAllRetailShops: boolean;

  @Column({ type: 'boolean', name: 'CanCombineReferenceDocuments', default: false })
  canCombineReferenceDocuments: boolean;

  @Column({ type: 'boolean', name: 'DocumentItemAccessByCashier', default: false })
  documentItemAccessByCashier: boolean;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'ReturnInvoiceBasedOnPermit', default: false })
  returnInvoiceBasedOnPermit: boolean;

  @Column({ type: 'boolean', name: 'OfflineSettlementPolicyInHdr', default: false })
  offlineSettlementPolicyInHdr: boolean;

  @Column({ type: 'boolean', name: 'OfflineSettlementPolicyInItm', default: false })
  offlineSettlementPolicyInItm: boolean;

  @Column({ type: 'boolean', name: 'OfflineSettlementPolicyVisibility', default: false })
  offlineSettlementPolicyVisibility: boolean;

  @Column({ type: 'boolean', name: 'IsOfflineSettlementPolicyObligatory', default: false })
  isOfflineSettlementPolicyObligatory: boolean;

}