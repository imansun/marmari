import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductTagPrint' })
export class LegacyProductTagPrint {
  @PrimaryColumn({ type: 'bigint', name: 'ProductTagPrintID' })
  productTagPrintID: number;

  @Column({ type: 'bigint', name: 'ProductTagRef' })
  productTagRef: number;

  @Column({ type: 'bigint', name: 'ProductTagTemplateRef' })
  productTagTemplateRef: number;

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