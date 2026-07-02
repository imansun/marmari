import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransposeSettingEntity' })
export class LegacyTransposeSettingEntity {
  @PrimaryColumn({ type: 'bigint', name: 'TransposeSettingEntityID' })
  transposeSettingEntityID: number;

  @Column({ type: 'bigint', name: 'TransposeSettingRef' })
  transposeSettingRef: number;

  @Column({ type: 'character varying', name: 'FirstNumber', nullable: true })
  firstNumber: string | null;

  @Column({ type: 'bigint', name: 'ClassificationRef' })
  classificationRef: number;

  @Column({ type: 'bigint', name: 'DirectReferenceBudgetEntityTypeRef', nullable: true })
  directReferenceBudgetEntityTypeRef: number | null;

  @Column({ type: 'character varying', name: 'DirectReferenceNumber', nullable: true })
  directReferenceNumber: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}