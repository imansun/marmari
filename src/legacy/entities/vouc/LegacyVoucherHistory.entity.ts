import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherHistory' })
export class LegacyVoucherHistory {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherHistoryID' })
  voucherHistoryID: number;

  @Column({ type: 'bigint', name: 'ReferenceNumber' })
  referenceNumber: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'integer', name: 'PropertyType' })
  propertyType: number;

  @Column({ type: 'character varying', name: 'OriginPropertyValue', nullable: true })
  originPropertyValue: string | null;

  @Column({ type: 'character varying', name: 'PropertyValue', nullable: true })
  propertyValue: string | null;

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