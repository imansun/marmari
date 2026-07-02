import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AzinghalebInvoiceBazkarInfo' })
export class LegacyAzinghalebInvoiceBazkarInfo {
  @PrimaryColumn({ type: 'bigint', name: 'AzinghalebInvoiceBazkarInfoID' })
  azinghalebInvoiceBazkarInfoID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'integer', name: 'BazkarProcess', nullable: true })
  bazkarProcess: number | null;

  @Column({ type: 'integer', name: 'BazkarAgument', nullable: true })
  bazkarAgument: number | null;

  @Column({ type: 'numeric', name: 'BazkarQuantity', nullable: true })
  bazkarQuantity: number | null;

  @Column({ type: 'numeric', name: 'AmlyatAccomplishmentTimeSum', nullable: true })
  amlyatAccomplishmentTimeSum: number | null;

  @Column({ type: 'character varying', name: 'AdaptationInexistenceCode', nullable: true })
  adaptationInexistenceCode: string | null;

  @Column({ type: 'integer', nullable: true })
  dastgahcode: number | null;

  @Column({ type: 'character varying', name: 'RenderinggCode', nullable: true })
  renderinggCode: string | null;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

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