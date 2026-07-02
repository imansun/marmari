import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IranCodeItem' })
export class LegacyIranCodeItem {
  @PrimaryColumn({ type: 'bigint', name: 'IranCodeItemID' })
  iranCodeItemID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'DesignRef', nullable: true })
  designRef: number | null;

  @Column({ type: 'bigint', name: 'BrandRef', nullable: true })
  brandRef: number | null;

  @Column({ type: 'bigint', name: 'HemLineRef', nullable: true })
  hemLineRef: number | null;

  @Column({ type: 'bigint', name: 'DegreeRef', nullable: true })
  degreeRef: number | null;

  @Column({ type: 'numeric', name: 'Gs1Code', nullable: true })
  gs1Code: number | null;

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