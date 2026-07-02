import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'sakhtarBOMazingh' })
export class LegacySakhtarBOMazingh {
  @PrimaryColumn({ type: 'bigint' })
  sakhtarBOMazinghID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'ProductNameRef', nullable: true })
  productNameRef: number | null;

  @Column({ type: 'character varying', name: 'ProductCode', nullable: true })
  productCode: string | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'timestamp without time zone', name: 'AuthorshipDate', nullable: true })
  authorshipDate: Date | null;

  @Column({ type: 'character varying', name: 'LickingFrameworkNo' })
  lickingFrameworkNo: string;

  @Column({ type: 'bigint', name: 'Nghshh1FoldingMoney', nullable: true })
  nghshh1FoldingMoney: number | null;

  @Column({ type: 'bigint', name: 'Nghshh2FoldingMoney', nullable: true })
  nghshh2FoldingMoney: number | null;

  @Column({ type: 'character varying', name: 'AkinFrameworkTuzyhatWithProduct', nullable: true })
  akinFrameworkTuzyhatWithProduct: string | null;

  @Column({ type: 'character varying', name: 'PerIsDesigning', nullable: true })
  perIsDesigning: string | null;

  @Column({ type: 'boolean', name: 'RenderingFolding', nullable: true })
  renderingFolding: boolean | null;

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