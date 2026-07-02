import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceSalesArea' })
export class LegacySelfServiceSalesArea {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceSalesAreaID' })
  selfServiceSalesAreaID: number;

  @Column({ type: 'bigint', name: 'SalesAreaRef' })
  salesAreaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}