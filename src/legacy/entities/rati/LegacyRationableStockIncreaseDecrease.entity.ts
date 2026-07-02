import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationableStockIncreaseDecrease' })
export class LegacyRationableStockIncreaseDecrease {
  @PrimaryColumn({ type: 'bigint', name: 'RationableStockIncreaseDecreaseID' })
  rationableStockIncreaseDecreaseID: number;

  @Column({ type: 'bigint', name: 'RationableStockRef' })
  rationableStockRef: number;

  @Column({ type: 'numeric', name: 'Percent', nullable: true })
  percent: number | null;

  @Column({ type: 'numeric', name: 'Value', nullable: true })
  value: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}