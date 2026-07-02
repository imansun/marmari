import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StandardVoucherTypeMapping' })
export class LegacyStandardVoucherTypeMapping {
  @PrimaryColumn({ type: 'bigint', name: 'StandardVoucherTypeMappingID' })
  standardVoucherTypeMappingID: number;

  @Column({ type: 'bigint', name: 'CodingStandardRef' })
  codingStandardRef: number;

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