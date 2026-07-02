import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceSalesType' })
export class LegacySelfServiceSalesType {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceSalesTypeID' })
  selfServiceSalesTypeID: number;

  @Column({ type: 'bigint', name: 'SalesTypeRef' })
  salesTypeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}