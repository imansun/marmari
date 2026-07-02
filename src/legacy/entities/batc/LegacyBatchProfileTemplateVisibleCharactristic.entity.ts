import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchProfileTemplateVisibleCharactristic' })
export class LegacyBatchProfileTemplateVisibleCharactristic {
  @PrimaryColumn({ type: 'bigint', name: 'BatchProfileTemplateVisibleCharactristicID' })
  batchProfileTemplateVisibleCharactristicID: number;

  @Column({ type: 'bigint', name: 'BatchProfileTemplateRef' })
  batchProfileTemplateRef: number;

  @Column({ type: 'bigint', name: 'CharactristicRef' })
  charactristicRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}