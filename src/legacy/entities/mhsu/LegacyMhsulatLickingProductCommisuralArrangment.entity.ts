import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MhsulatLickingProductCommisuralArrangment' })
export class LegacyMhsulatLickingProductCommisuralArrangment {
  @PrimaryColumn({ type: 'bigint', name: 'MhsulatLickingProductCommisuralArrangmentID' })
  mhsulatLickingProductCommisuralArrangmentID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'numeric', name: 'ProductDuringQuantity', nullable: true })
  productDuringQuantity: number | null;

  @Column({ type: 'bigint', name: 'SupplementalItemCodeRef', nullable: true })
  supplementalItemCodeRef: number | null;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'character varying', name: 'SupplementalItemName', nullable: true })
  supplementalItemName: string | null;

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

  @Column({ type: 'character varying', name: 'CompleteItemCode', nullable: true })
  completeItemCode: string | null;

}