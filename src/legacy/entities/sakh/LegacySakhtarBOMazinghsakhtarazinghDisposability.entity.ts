import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'sakhtarBOMazinghsakhtarazinghDisposability' })
export class LegacySakhtarBOMazinghsakhtarazinghDisposability {
  @PrimaryColumn({ type: 'bigint' })
  sakhtarBOMazinghsakhtarazinghDisposabilityID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'CameoNameRef', nullable: true })
  cameoNameRef: number | null;

  @Column({ type: 'character varying', name: 'CameoCode', nullable: true })
  cameoCode: string | null;

  @Column({ type: 'bigint', name: 'DisposabilityGoodsNameRef', nullable: true })
  disposabilityGoodsNameRef: number | null;

  @Column({ type: 'character varying', name: 'AssayCredit', nullable: true })
  assayCredit: string | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'character varying', name: 'DisposabilityGoodsCode', nullable: true })
  disposabilityGoodsCode: string | null;

  @Column({ type: 'numeric', name: 'AbscissaDiagonal', nullable: true })
  abscissaDiagonal: number | null;

  @Column({ type: 'numeric', name: 'Latitude', nullable: true })
  latitude: number | null;

  @Column({ type: 'numeric', name: 'Altitude', nullable: true })
  altitude: number | null;

  @Column({ type: 'character varying', name: 'RenderingCode', nullable: true })
  renderingCode: string | null;

  @Column({ type: 'numeric', name: 'EventualHeft', nullable: true })
  eventualHeft: number | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'bigint', name: 'GoodsKindRef', nullable: true })
  goodsKindRef: number | null;

  @Column({ type: 'numeric', name: 'M3KgDensity', nullable: true })
  m3KgDensity: number | null;

  @Column({ type: 'integer', name: 'GoodsConfigurationKind', nullable: true })
  goodsConfigurationKind: number | null;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'numeric', name: 'DisposabilityQuantity', nullable: true })
  disposabilityQuantity: number | null;

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