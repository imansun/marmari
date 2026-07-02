import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CargoShippingInfo' })
export class LegacyCargoShippingInfo {
  @PrimaryColumn({ type: 'bigint', name: 'CargoShippingInfoID' })
  cargoShippingInfoID: number;

  @Column({ type: 'bigint', name: 'CargoRef' })
  cargoRef: number;

  @Column({ type: 'boolean', name: 'NeedsLoading' })
  needsLoading: boolean;

  @Column({ type: 'integer', name: 'LoadingType', nullable: true })
  loadingType: number | null;

  @Column({ type: 'bigint', name: 'RecipientRef', nullable: true })
  recipientRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}