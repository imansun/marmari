import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SignatureTemplateSignatory' })
export class LegacySignatureTemplateSignatory {
  @PrimaryColumn({ type: 'bigint', name: 'SignatureTemplateSignatoryID' })
  signatureTemplateSignatoryID: number;

  @Column({ type: 'bigint', name: 'SignatureTemplateRef' })
  signatureTemplateRef: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}