import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationingExceptionItem' })
export class LegacyRationingExceptionItem {
  @PrimaryColumn({ type: 'bigint', name: 'RationingExceptionItemID' })
  rationingExceptionItemID: number;

  @Column({ type: 'bigint', name: 'RationingExceptionRef' })
  rationingExceptionRef: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate', nullable: true })
  toDate: Date | null;

  @Column({ type: 'bigint', name: 'WarehouseRef' })
  warehouseRef: number;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'bigint', name: 'ProductGroupingRef', nullable: true })
  productGroupingRef: number | null;

  @Column({ type: 'bigint', name: 'ProductGroupRef', nullable: true })
  productGroupRef: number | null;

  @Column({ type: 'numeric', name: 'ExceptionPercent' })
  exceptionPercent: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}