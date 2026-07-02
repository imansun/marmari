import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceSaleRequest' })
export class LegacySelfServiceSaleRequest {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceSaleRequestID' })
  selfServiceSaleRequestID: number;

  @Column({ type: 'bigint', name: 'SaleRequestRef' })
  saleRequestRef: number;

  @Column({ type: 'bigint', name: 'SelfServiceUserRef' })
  selfServiceUserRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}