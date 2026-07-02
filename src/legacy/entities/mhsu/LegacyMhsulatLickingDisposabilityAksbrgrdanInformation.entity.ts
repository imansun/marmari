import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MhsulatLickingDisposabilityAksbrgrdanInformation' })
export class LegacyMhsulatLickingDisposabilityAksbrgrdanInformation {
  @PrimaryColumn({ type: 'bigint', name: 'MhsulatLickingDisposabilityAksbrgrdanInformationID' })
  mhsulatLickingDisposabilityAksbrgrdanInformationID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'AksbrgrdanCodeRef', nullable: true })
  aksbrgrdanCodeRef: number | null;

  @Column({ type: 'numeric', name: 'ProductDuringQuantity', nullable: true })
  productDuringQuantity: number | null;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'character varying', name: 'AksbrgrdanName', nullable: true })
  aksbrgrdanName: string | null;

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

  @Column({ type: 'character varying', name: 'AksbrgrdanCode1', nullable: true })
  aksbrgrdanCode1: string | null;

}