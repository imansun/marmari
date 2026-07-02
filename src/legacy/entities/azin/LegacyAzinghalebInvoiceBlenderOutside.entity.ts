import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AzinghalebInvoiceBlenderOutside' })
export class LegacyAzinghalebInvoiceBlenderOutside {
  @PrimaryColumn({ type: 'bigint', name: 'AzinghalebInvoiceBlenderOutsideID' })
  azinghalebInvoiceBlenderOutsideID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'DoerSecureNameRef', nullable: true })
  doerSecureNameRef: number | null;

  @Column({ type: 'integer', name: 'BlenderOutsideAmlyatName', nullable: true })
  blenderOutsideAmlyatName: number | null;

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