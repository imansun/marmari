import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceSalesOffice' })
export class LegacySelfServiceSalesOffice {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceSalesOfficeID' })
  selfServiceSalesOfficeID: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}