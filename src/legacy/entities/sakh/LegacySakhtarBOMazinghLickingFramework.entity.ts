import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'sakhtarBOMazinghLickingFramework' })
export class LegacySakhtarBOMazinghLickingFramework {
  @PrimaryColumn({ type: 'bigint' })
  sakhtarBOMazinghLickingFrameworkID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'CameoNameRef', nullable: true })
  cameoNameRef: number | null;

  @Column({ type: 'character varying', name: 'CameoCode', nullable: true })
  cameoCode: string | null;

  @Column({ type: 'character varying', name: 'RenderingCode', nullable: true })
  renderingCode: string | null;

  @Column({ type: 'integer', name: 'AmlyatProcessRendering', nullable: true })
  amlyatProcessRendering: number | null;

  @Column({ type: 'numeric', name: 'CymbalTime', nullable: true })
  cymbalTime: number | null;

  @Column({ type: 'bigint', name: 'Cuee' })
  cuee: number;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

  @Column({ type: 'numeric', name: 'FrayndHegemonyAmlyatProcessCue', nullable: true })
  frayndHegemonyAmlyatProcessCue: number | null;

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