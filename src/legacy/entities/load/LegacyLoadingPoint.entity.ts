import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoadingPoint' })
export class LegacyLoadingPoint {
  @PrimaryColumn({ type: 'bigint', name: 'LoadingPointID' })
  loadingPointID: number;

  @Column({ type: 'bigint', name: 'ShippingPointRef' })
  shippingPointRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

}