import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldBaseDataBagUser' })
export class LegacyHandheldBaseDataBagUser {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldBaseDataBagUserID' })
  handheldBaseDataBagUserID: number;

  @Column({ type: 'bigint', name: 'HandheldBaseDataBagRef' })
  handheldBaseDataBagRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'integer', name: 'IsActived' })
  isActived: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}