import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MhsulatLicking21ProductCommisuralArrangment' })
export class LegacyMhsulatLicking21ProductCommisuralArrangment {
  @PrimaryColumn({ type: 'bigint', name: 'MhsulatLicking21ProductCommisuralArrangmentID' })
  mhsulatLicking21ProductCommisuralArrangmentID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'numeric', name: 'ProductDuringQuantity', nullable: true })
  productDuringQuantity: number | null;

  @Column({ type: 'bigint', name: 'SupplementalItemCodeRef', nullable: true })
  supplementalItemCodeRef: number | null;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'character varying', name: 'SupplementalItemName1', nullable: true })
  supplementalItemName1: string | null;

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