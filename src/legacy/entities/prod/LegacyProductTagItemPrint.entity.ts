import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductTagItemPrint' })
export class LegacyProductTagItemPrint {
  @PrimaryColumn({ type: 'bigint', name: 'ProductTagItemPrintID' })
  productTagItemPrintID: number;

  @Column({ type: 'bigint', name: 'ProductTagItemRef' })
  productTagItemRef: number;

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