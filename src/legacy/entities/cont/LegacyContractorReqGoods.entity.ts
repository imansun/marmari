import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractorReqGoods' })
export class LegacyContractorReqGoods {
  @PrimaryColumn({ type: 'bigint', name: 'ContractorReqGoodsID' })
  contractorReqGoodsID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'character varying', name: 'GoodsEmissionRequestNo', nullable: true })
  goodsEmissionRequestNo: string | null;

  @Column({ type: 'timestamp without time zone', name: 'GoodsEgressDate', nullable: true })
  goodsEgressDate: Date | null;

  @Column({ type: 'bigint', name: 'GoodsEgressLiableRef', nullable: true })
  goodsEgressLiableRef: number | null;

  @Column({ type: 'bigint', name: 'RequestNameRef', nullable: true })
  requestNameRef: number | null;

  @Column({ type: 'bigint', name: 'GoodsNameRef', nullable: true })
  goodsNameRef: number | null;

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

}