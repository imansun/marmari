import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherLock' })
export class LegacyVoucherLock {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherLockID' })
  voucherLockID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}