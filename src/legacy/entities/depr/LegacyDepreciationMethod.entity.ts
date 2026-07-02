import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DepreciationMethod' })
export class LegacyDepreciationMethod {
  @PrimaryColumn({ type: 'bigint', name: 'DepreciationMethodID' })
  depreciationMethodID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En' })
  titleEn: string;

  @Column({ type: 'integer', name: 'MethodType' })
  methodType: number;

  @Column({ type: 'numeric', name: 'Rate', nullable: true })
  rate: number | null;

  @Column({ type: 'numeric', name: 'Usefullife', nullable: true })
  usefullife: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsGas', default: false })
  isGas: boolean;

}