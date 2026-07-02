import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'sakhtarBOMazinghSubjectcal' })
export class LegacySakhtarBOMazinghSubjectcal {
  @PrimaryColumn({ type: 'bigint' })
  sakhtarBOMazinghSubjectcalID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'GoodsKindRef', nullable: true })
  goodsKindRef: number | null;

  @Column({ type: 'integer', name: 'GoodsConfiguration', nullable: true })
  goodsConfiguration: number | null;

  @Column({ type: 'numeric', name: 'Density', nullable: true })
  density: number | null;

  @Column({ type: 'numeric', name: 'SWAbscissaForeignerDiagonal', nullable: true })
  sWAbscissaForeignerDiagonal: number | null;

  @Column({ type: 'numeric', name: 'LatitudeDomesticDiagonal', nullable: true })
  latitudeDomesticDiagonal: number | null;

  @Column({ type: 'numeric', name: 'Altitude', nullable: true })
  altitude: number | null;

  @Column({ type: 'numeric', name: 'Heft', nullable: true })
  heft: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

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