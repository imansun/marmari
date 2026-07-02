import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GoodsCodeAuthorshipRequestSystem' })
export class LegacyGoodsCodeAuthorshipRequestSystem {
  @PrimaryColumn({ type: 'bigint', name: 'GoodsCodeAuthorshipRequestSystemID' })
  goodsCodeAuthorshipRequestSystemID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'GoodsName', nullable: true })
  goodsName: string | null;

  @Column({ type: 'bigint', name: 'DemandMyrtleInventoryNameRef', nullable: true })
  demandMyrtleInventoryNameRef: number | null;

  @Column({ type: 'bigint', name: 'AssayCreditRef', nullable: true })
  assayCreditRef: number | null;

  @Column({ type: 'integer', name: 'DisposabilityGoodsGruhbnd', nullable: true })
  disposabilityGoodsGruhbnd: number | null;

  @Column({ type: 'bigint', name: 'ConsumptionPriceCrossroadRef', nullable: true })
  consumptionPriceCrossroadRef: number | null;

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

  @Column({ type: 'character varying', name: 'IsAuthorshipGoodsCode', nullable: true })
  isAuthorshipGoodsCode: string | null;

}