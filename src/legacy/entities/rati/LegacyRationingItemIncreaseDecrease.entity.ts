import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationingItemIncreaseDecrease' })
export class LegacyRationingItemIncreaseDecrease {
  @PrimaryColumn({ type: 'bigint', name: 'RationingItemIncreaseDecreaseID' })
  rationingItemIncreaseDecreaseID: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'numeric', name: 'Percent', nullable: true })
  percent: number | null;

  @Column({ type: 'numeric', name: 'Value', nullable: true })
  value: number | null;

  @Column({ type: 'bigint', name: 'RationingItemRef' })
  rationingItemRef: number;

  @Column({ type: 'bigint', name: 'TargetRationingItemRef', nullable: true })
  targetRationingItemRef: number | null;

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