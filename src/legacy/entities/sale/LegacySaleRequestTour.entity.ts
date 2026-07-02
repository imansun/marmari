import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SaleRequestTour' })
export class LegacySaleRequestTour {
  @PrimaryColumn({ type: 'bigint', name: 'SaleRequestTourID' })
  saleRequestTourID: number;

  @Column({ type: 'bigint', name: 'SaleRequestRef' })
  saleRequestRef: number;

  @Column({ type: 'bigint', name: 'TourRef' })
  tourRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}