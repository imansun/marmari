import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcurmentOrderExtensionItem' })
export class LegacyProcurmentOrderExtensionItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProcurmentOrderExtensionItemID' })
  procurmentOrderExtensionItemID: number;

  @Column({ type: 'bigint', name: 'ProcurmentOrderExtensionRef' })
  procurmentOrderExtensionRef: number;

  @Column({ type: 'bigint', name: 'BomRef', nullable: true })
  bomRef: number | null;

  @Column({ type: 'bigint', name: 'OrderItemRef' })
  orderItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}