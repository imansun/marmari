import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationSerialScrap' })
export class LegacyConfirmationSerialScrap {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationSerialScrapID' })
  confirmationSerialScrapID: number;

  @Column({ type: 'bigint', name: 'ConfirmationSerialRef' })
  confirmationSerialRef: number;

  @Column({ type: 'bigint', name: 'ConfirmationScrapRef' })
  confirmationScrapRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}