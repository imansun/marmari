import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CuttarhInformation' })
export class LegacyCuttarhInformation {
  @PrimaryColumn({ type: 'bigint', name: 'CuttarhInformationID' })
  cuttarhInformationID: number;

  @Column({ type: 'bigint', name: 'CutTitleRef', nullable: true })
  cutTitleRef: number | null;

  @Column({ type: 'character varying', name: 'CutCode', nullable: true })
  cutCode: string | null;

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

  @Column({ type: 'character varying', name: 'BrndEntryNo', nullable: true })
  brndEntryNo: string | null;

}