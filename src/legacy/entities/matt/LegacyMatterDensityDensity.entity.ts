import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MatterDensityDensity' })
export class LegacyMatterDensityDensity {
  @PrimaryColumn({ type: 'bigint', name: 'MatterDensityDensityID' })
  matterDensityDensityID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'character varying', name: 'GoodsKind', nullable: true })
  goodsKind: string | null;

  @Column({ type: 'numeric', name: 'M3KgDensityBar', nullable: true })
  m3KgDensityBar: number | null;

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