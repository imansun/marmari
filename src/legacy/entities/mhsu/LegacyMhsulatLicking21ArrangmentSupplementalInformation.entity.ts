import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MhsulatLicking21ArrangmentSupplementalInformation' })
export class LegacyMhsulatLicking21ArrangmentSupplementalInformation {
  @PrimaryColumn({ type: 'bigint', name: 'MhsulatLicking21ArrangmentSupplementalInformationID' })
  mhsulatLicking21ArrangmentSupplementalInformationID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'ItemCodeRef', nullable: true })
  itemCodeRef: number | null;

  @Column({ type: 'numeric', name: 'ProductDuringQuantity', nullable: true })
  productDuringQuantity: number | null;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'character varying', name: 'ItemName', nullable: true })
  itemName: string | null;

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