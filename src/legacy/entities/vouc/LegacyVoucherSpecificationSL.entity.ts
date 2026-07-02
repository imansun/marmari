import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherSpecificationSL' })
export class LegacyVoucherSpecificationSL {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherSpecificationSLID' })
  voucherSpecificationSLID: number;

  @Column({ type: 'bigint', name: 'VoucherSpecificationRef' })
  voucherSpecificationRef: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'integer', name: 'NatureCode' })
  natureCode: number;

  @Column({ type: 'bigint', name: 'DLTypeRef4', nullable: true })
  dLTypeRef4: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef5', nullable: true })
  dLTypeRef5: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef6', nullable: true })
  dLTypeRef6: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef7', nullable: true })
  dLTypeRef7: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef8', nullable: true })
  dLTypeRef8: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef9', nullable: true })
  dLTypeRef9: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef10', nullable: true })
  dLTypeRef10: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef11', nullable: true })
  dLTypeRef11: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef12', nullable: true })
  dLTypeRef12: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef13', nullable: true })
  dLTypeRef13: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef14', nullable: true })
  dLTypeRef14: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef15', nullable: true })
  dLTypeRef15: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef16', nullable: true })
  dLTypeRef16: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef17', nullable: true })
  dLTypeRef17: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef18', nullable: true })
  dLTypeRef18: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef19', nullable: true })
  dLTypeRef19: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef20', nullable: true })
  dLTypeRef20: number | null;

  @Column({ type: 'character varying', name: 'DLCode4', nullable: true })
  dLCode4: string | null;

  @Column({ type: 'character varying', name: 'DLCode5', nullable: true })
  dLCode5: string | null;

  @Column({ type: 'character varying', name: 'DLCode6', nullable: true })
  dLCode6: string | null;

  @Column({ type: 'character varying', name: 'DLCode7', nullable: true })
  dLCode7: string | null;

  @Column({ type: 'character varying', name: 'DLCode8', nullable: true })
  dLCode8: string | null;

  @Column({ type: 'character varying', name: 'DLCode9', nullable: true })
  dLCode9: string | null;

  @Column({ type: 'character varying', name: 'DLCode10', nullable: true })
  dLCode10: string | null;

  @Column({ type: 'character varying', name: 'DLCode11', nullable: true })
  dLCode11: string | null;

  @Column({ type: 'character varying', name: 'DLCode12', nullable: true })
  dLCode12: string | null;

  @Column({ type: 'character varying', name: 'DLCode13', nullable: true })
  dLCode13: string | null;

  @Column({ type: 'character varying', name: 'DLCode14', nullable: true })
  dLCode14: string | null;

  @Column({ type: 'character varying', name: 'DLCode15', nullable: true })
  dLCode15: string | null;

  @Column({ type: 'character varying', name: 'DLCode16', nullable: true })
  dLCode16: string | null;

  @Column({ type: 'character varying', name: 'DLCode17', nullable: true })
  dLCode17: string | null;

  @Column({ type: 'character varying', name: 'DLCode18', nullable: true })
  dLCode18: string | null;

  @Column({ type: 'character varying', name: 'DLCode19', nullable: true })
  dLCode19: string | null;

  @Column({ type: 'character varying', name: 'DLCode20', nullable: true })
  dLCode20: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'integer', name: 'RelatedDLStatus', default: 2 })
  relatedDLStatus: number;

}