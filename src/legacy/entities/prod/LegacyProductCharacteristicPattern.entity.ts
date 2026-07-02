import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductCharacteristicPattern' })
export class LegacyProductCharacteristicPattern {
  @PrimaryColumn({ type: 'bigint', name: 'ProductCharacteristicPatternID' })
  productCharacteristicPatternID: number;

  @Column({ type: 'bigint', name: 'BatchProfileTemplateItemRef' })
  batchProfileTemplateItemRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'boolean', name: 'IsExpirationDate' })
  isExpirationDate: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}