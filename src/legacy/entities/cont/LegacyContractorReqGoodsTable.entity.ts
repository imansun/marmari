import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractorReqGoodsTable' })
export class LegacyContractorReqGoodsTable {
  @PrimaryColumn({ type: 'bigint', name: 'ContractorReqGoodsTableID' })
  contractorReqGoodsTableID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Row' })
  row: number;

  @Column({ type: 'bigint', name: 'GoodsRequestNoRef', nullable: true })
  goodsRequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'GoodsCodeRef', nullable: true })
  goodsCodeRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'bigint', name: 'AssayCreditRef', nullable: true })
  assayCreditRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

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

  @Column({ type: 'character varying', name: 'InventoryGoodsRequestNo', nullable: true })
  inventoryGoodsRequestNo: string | null;

  @Column({ type: 'bigint', name: 'UahdsnjshRef', nullable: true })
  uahdsnjshRef: number | null;

}