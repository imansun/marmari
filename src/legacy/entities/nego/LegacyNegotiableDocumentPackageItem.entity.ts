import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NegotiableDocumentPackageItem' })
export class LegacyNegotiableDocumentPackageItem {
  @PrimaryColumn({ type: 'bigint', name: 'NegotiableDocumentPackageItemID' })
  negotiableDocumentPackageItemID: number;

  @Column({ type: 'bigint', name: 'NegotiableDocumentPackageRef' })
  negotiableDocumentPackageRef: number;

  @Column({ type: 'bigint', name: 'NegotiableDocumentRef' })
  negotiableDocumentRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}