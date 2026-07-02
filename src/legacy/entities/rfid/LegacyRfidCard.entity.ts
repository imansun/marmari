import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidCard' })
export class LegacyRfidCard {
  @PrimaryColumn({ type: 'bigint', name: 'RfidCardID' })
  rfidCardID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'UsageTypeCode' })
  usageTypeCode: number;

  @Column({ type: 'integer', name: 'ManufacturerCode', nullable: true })
  manufacturerCode: number | null;

  @Column({ type: 'integer', name: 'TypeCode', nullable: true })
  typeCode: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ExpiryDate', nullable: true })
  expiryDate: Date | null;

  @Column({ type: 'character', name: 'DefaultCode', nullable: true })
  defaultCode: string | null;

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

  @Column({ type: 'integer', name: 'Group', nullable: true })
  group: number | null;

  @Column({ type: 'integer', name: 'Status', default: 1 })
  status: number;

  @Column({ type: 'boolean', name: 'IsVirtual', default: false })
  isVirtual: boolean;

}