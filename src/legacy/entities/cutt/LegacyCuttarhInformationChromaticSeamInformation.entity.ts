import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CuttarhInformationChromaticSeamInformation' })
export class LegacyCuttarhInformationChromaticSeamInformation {
  @PrimaryColumn({ type: 'bigint', name: 'CuttarhInformationChromaticSeamInformationID' })
  cuttarhInformationChromaticSeamInformationID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'numeric', name: 'ChromaticSeamQuantity', nullable: true })
  chromaticSeamQuantity: number | null;

  @Column({ type: 'integer', name: 'ChromaticSeamKind2', nullable: true })
  chromaticSeamKind2: number | null;

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

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

}