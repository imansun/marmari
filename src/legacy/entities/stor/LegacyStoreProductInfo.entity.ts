import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StoreProductInfo' })
export class LegacyStoreProductInfo {
  @PrimaryColumn({ type: 'bigint', name: 'StoreProductInfoID' })
  storeProductInfoID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'bigint', name: 'ProductNameRef', nullable: true })
  productNameRef: number | null;

  @Column({ type: 'character varying', name: 'ProductCode', nullable: true })
  productCode: string | null;

  @Column({ type: 'character varying', name: 'ProductOutletName', nullable: true })
  productOutletName: string | null;

  @Column({ type: 'character varying', name: 'ProductOutletCode', nullable: true })
  productOutletCode: string | null;

  @Column({ type: 'bigint', name: 'CutRef', nullable: true })
  cutRef: number | null;

  @Column({ type: 'bigint', name: 'HemLineRef', nullable: true })
  hemLineRef: number | null;

  @Column({ type: 'numeric', name: 'Rate', nullable: true })
  rate: number | null;

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

  @Column({ type: 'numeric', name: 'ImpositionWithRate', nullable: true })
  impositionWithRate: number | null;

}