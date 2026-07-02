import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesStratumAndGridProductItem' })
export class LegacySalesStratumAndGridProductItem {
  @PrimaryColumn({ type: 'bigint', name: 'SalesStratumAndGridProductItemID' })
  salesStratumAndGridProductItemID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'CutRef', nullable: true })
  cutRef: number | null;

  @Column({ type: 'bigint', name: 'BrandRef', nullable: true })
  brandRef: number | null;

  @Column({ type: 'bigint', name: 'HemLineRef', nullable: true })
  hemLineRef: number | null;

  @Column({ type: 'bigint', name: 'OnceRef', nullable: true })
  onceRef: number | null;

  @Column({ type: 'integer', name: 'CommisuralStratum', nullable: true })
  commisuralStratum: number | null;

  @Column({ type: 'integer', name: 'ProductGrid', nullable: true })
  productGrid: number | null;

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