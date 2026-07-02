import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RequestAmaniKalaEmissionGoodsInformation' })
export class LegacyRequestAmaniKalaEmissionGoodsInformation {
  @PrimaryColumn({ type: 'bigint', name: 'RequestAmaniKalaEmissionGoodsInformationID' })
  requestAmaniKalaEmissionGoodsInformationID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Number' })
  number: number;

  @Column({ type: 'character varying', name: 'GoodsName', nullable: true })
  goodsName: string | null;

  @Column({ type: 'bigint', name: 'GoodsCodeRef', nullable: true })
  goodsCodeRef: number | null;

  @Column({ type: 'bigint', name: 'AssayCreditRef', nullable: true })
  assayCreditRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'character varying', name: 'ItemComments', nullable: true })
  itemComments: string | null;

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

  @Column({ type: 'bigint', name: 'RespectiveJustificationNoRef', nullable: true })
  respectiveJustificationNoRef: number | null;

}