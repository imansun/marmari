import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AzinghalebInvoiceNyruyansanAndAmlyatkhadamat' })
export class LegacyAzinghalebInvoiceNyruyansanAndAmlyatkhadamat {
  @PrimaryColumn({ type: 'bigint', name: 'AzinghalebInvoiceNyruyansanAndAmlyatkhadamatID' })
  azinghalebInvoiceNyruyansanAndAmlyatkhadamatID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'integer', name: 'ServicesProcessAmalyatRendering', nullable: true })
  servicesProcessAmalyatRendering: number | null;

  @Column({ type: 'integer', name: 'TractCode', nullable: true })
  tractCode: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'bigint', name: 'Apratur1NameRef', nullable: true })
  apratur1NameRef: number | null;

  @Column({ type: 'bigint', name: 'Apratur2NameRef', nullable: true })
  apratur2NameRef: number | null;

  @Column({ type: 'numeric', name: 'MinuteToIsMorphologyTimeSum', nullable: true })
  minuteToIsMorphologyTimeSum: number | null;

  @Column({ type: 'timestamp without time zone', name: 'AmlyatAlphaDate', nullable: true })
  amlyatAlphaDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'AmlyatAccomplishmentDate', nullable: true })
  amlyatAccomplishmentDate: Date | null;

  @Column({ type: 'bigint', name: 'AttendantNameRef', nullable: true })
  attendantNameRef: number | null;

  @Column({ type: 'character varying', name: 'RenderingCodee', nullable: true })
  renderingCodee: string | null;

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