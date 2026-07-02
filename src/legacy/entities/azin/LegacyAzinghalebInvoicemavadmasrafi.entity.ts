import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AzinghalebInvoicemavadmasrafi' })
export class LegacyAzinghalebInvoicemavadmasrafi {
  @PrimaryColumn({ type: 'bigint', name: 'AzinghalebInvoicemavadmasrafiID' })
  azinghalebInvoicemavadmasrafiID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'bigint', name: 'ConsumptionOrderNoRef', nullable: true })
  consumptionOrderNoRef: number | null;

  @Column({ type: 'character varying', name: 'ProgramNum', nullable: true })
  programNum: string | null;

  @Column({ type: 'character varying', name: 'InventoryNamee', nullable: true })
  inventoryNamee: string | null;

  @Column({ type: 'character varying', name: 'IsConsumptionGoodsCodee', nullable: true })
  isConsumptionGoodsCodee: string | null;

  @Column({ type: 'character varying', name: 'IsConsumptionGoodsName', nullable: true })
  isConsumptionGoodsName: string | null;

  @Column({ type: 'numeric', name: 'IsConsumptionQuantityy', nullable: true })
  isConsumptionQuantityy: number | null;

  @Column({ type: 'character varying', name: 'AssayCredit', nullable: true })
  assayCredit: string | null;

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