import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartDetail' })
export class LegacyPartDetail {
  @PrimaryColumn({ type: 'bigint', name: 'PartDetailID' })
  partDetailID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}