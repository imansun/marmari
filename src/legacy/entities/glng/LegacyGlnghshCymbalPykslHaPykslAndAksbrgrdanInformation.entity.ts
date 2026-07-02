import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GlnghshCymbalPykslHaPykslAndAksbrgrdanInformation' })
export class LegacyGlnghshCymbalPykslHaPykslAndAksbrgrdanInformation {
  @PrimaryColumn({ type: 'bigint', name: 'GlnghshCymbalPykslHaPykslAndAksbrgrdanInformationID' })
  glnghshCymbalPykslHaPykslAndAksbrgrdanInformationID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'AksbrgrdanCodeRef', nullable: true })
  aksbrgrdanCodeRef: number | null;

  @Column({ type: 'character varying', name: 'AksbrgrdanName', nullable: true })
  aksbrgrdanName: string | null;

  @Column({ type: 'numeric', name: 'PykslQuantity', nullable: true })
  pykslQuantity: number | null;

  @Column({ type: 'bigint', name: 'RingCutCodeRef', nullable: true })
  ringCutCodeRef: number | null;

  @Column({ type: 'character varying', name: 'RingCutName', nullable: true })
  ringCutName: string | null;

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