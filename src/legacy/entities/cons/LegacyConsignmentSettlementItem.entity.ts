import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConsignmentSettlementItem' })
export class LegacyConsignmentSettlementItem {
  @PrimaryColumn({ type: 'bigint', name: 'ConsignmentSettlementItemID' })
  consignmentSettlementItemID: number;

  @Column({ type: 'bigint', name: 'ConsignmentSettlementRef' })
  consignmentSettlementRef: number;

  @Column({ type: 'bigint', name: 'ConsignmentDocumentRef' })
  consignmentDocumentRef: number;

  @Column({ type: 'bigint', name: 'BaseReturnDocumentRef', nullable: true })
  baseReturnDocumentRef: number | null;

  @Column({ type: 'bigint', name: 'BaseDeliveryDocumentRef', nullable: true })
  baseDeliveryDocumentRef: number | null;

  @Column({ type: 'boolean', name: 'IsAuto' })
  isAuto: boolean;

}