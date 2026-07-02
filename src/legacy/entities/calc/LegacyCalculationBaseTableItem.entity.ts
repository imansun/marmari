import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationBaseTableItem' })
export class LegacyCalculationBaseTableItem {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationBaseTableItemID' })
  calculationBaseTableItemID: number;

  @Column({ type: 'bigint', name: 'CalculationBaseTableRef' })
  calculationBaseTableRef: number;

  @Column({ type: 'numeric', name: 'Key1' })
  key1: number;

  @Column({ type: 'numeric', name: 'Key2', nullable: true })
  key2: number | null;

  @Column({ type: 'numeric', name: 'Key3', nullable: true })
  key3: number | null;

  @Column({ type: 'numeric', name: 'Value1' })
  value1: number;

  @Column({ type: 'numeric', name: 'Value2', nullable: true })
  value2: number | null;

  @Column({ type: 'numeric', name: 'Value3', nullable: true })
  value3: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'Key4', nullable: true })
  key4: number | null;

  @Column({ type: 'numeric', name: 'Key5', nullable: true })
  key5: number | null;

  @Column({ type: 'numeric', name: 'Key6', nullable: true })
  key6: number | null;

  @Column({ type: 'numeric', name: 'Key7', nullable: true })
  key7: number | null;

  @Column({ type: 'numeric', name: 'Key8', nullable: true })
  key8: number | null;

  @Column({ type: 'numeric', name: 'Key9', nullable: true })
  key9: number | null;

  @Column({ type: 'numeric', name: 'Key10', nullable: true })
  key10: number | null;

  @Column({ type: 'numeric', name: 'Value4', nullable: true })
  value4: number | null;

  @Column({ type: 'numeric', name: 'Value5', nullable: true })
  value5: number | null;

  @Column({ type: 'numeric', name: 'Value6', nullable: true })
  value6: number | null;

  @Column({ type: 'numeric', name: 'Value7', nullable: true })
  value7: number | null;

  @Column({ type: 'numeric', name: 'Value8', nullable: true })
  value8: number | null;

  @Column({ type: 'numeric', name: 'Value9', nullable: true })
  value9: number | null;

  @Column({ type: 'numeric', name: 'Value10', nullable: true })
  value10: number | null;

}