import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductTagCriterionSerial' })
export class LegacyProductTagCriterionSerial {
  @PrimaryColumn({ type: 'bigint', name: 'ProductTagCriterionSerialID' })
  productTagCriterionSerialID: number;

  @Column({ type: 'bigint', name: 'ProductTagCriterionRef' })
  productTagCriterionRef: number;

  @Column({ type: 'integer', name: 'StartSerialIndex', nullable: true })
  startSerialIndex: number | null;

  @Column({ type: 'integer', name: 'EndSerialIndex', nullable: true })
  endSerialIndex: number | null;

  @Column({ type: 'bigint', name: 'StartSerialRef' })
  startSerialRef: number;

  @Column({ type: 'bigint', name: 'EndSerialRef' })
  endSerialRef: number;

  @Column({ type: 'integer', name: 'NumberOfSerials' })
  numberOfSerials: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}