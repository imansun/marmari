import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartFilterItem' })
export class LegacyPartFilterItem {
  @PrimaryColumn({ type: 'bigint', name: 'PartFilterItemID' })
  partFilterItemID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'character varying', name: 'PartName' })
  partName: string;

  @Column({ type: 'character varying', name: 'PartCode' })
  partCode: string;

  @Column({ type: 'integer', name: 'PartState' })
  partState: number;

  @Column({ type: 'bigint', name: 'CategoryRef', nullable: true })
  categoryRef: number | null;

  @Column({ type: 'integer', name: 'PartNature' })
  partNature: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'Stock' })
  stock: number;

  @Column({ type: 'integer', name: 'TransactionCount' })
  transactionCount: number;

  @Column({ type: 'numeric', name: 'MinFee', nullable: true })
  minFee: number | null;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'integer', name: 'PartStoreState' })
  partStoreState: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}