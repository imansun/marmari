import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchProfileTemplateItem' })
export class LegacyBatchProfileTemplateItem {
  @PrimaryColumn({ type: 'bigint', name: 'BatchProfileTemplateItemID' })
  batchProfileTemplateItemID: number;

  @Column({ type: 'bigint', name: 'BatchProfileTemplateRef' })
  batchProfileTemplateRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Group', nullable: true })
  group: number | null;

}