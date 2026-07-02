import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StoreStructureFinalizationState' })
export class LegacyStoreStructureFinalizationState {
  @PrimaryColumn({ type: 'bigint', name: 'StoreStructureFinalizationStateID' })
  storeStructureFinalizationStateID: number;

  @Column({ type: 'bigint', name: 'StoreStructureRef' })
  storeStructureRef: number;

  @Column({ type: 'bigint', name: 'FinalizationState' })
  finalizationState: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

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