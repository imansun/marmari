import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailHandheldDevice' })
export class LegacyRetailHandheldDevice {
  @PrimaryColumn({ type: 'bigint', name: 'RetailHandheldDeviceID' })
  retailHandheldDeviceID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Serial' })
  serial: string;

  @Column({ type: 'character varying', name: 'Brand' })
  brand: string;

  @Column({ type: 'character varying', name: 'Model', nullable: true })
  model: string | null;

  @Column({ type: 'character varying', name: 'SIMNumber', nullable: true })
  sIMNumber: string | null;

  @Column({ type: 'character varying', name: 'IMEINumber', nullable: true })
  iMEINumber: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'DeviceType' })
  deviceType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'character varying', name: 'GoogleFireBaseTokenID', nullable: true })
  googleFireBaseTokenID: string | null;

  @Column({ type: 'integer', name: 'PDAType' })
  pDAType: number;

}