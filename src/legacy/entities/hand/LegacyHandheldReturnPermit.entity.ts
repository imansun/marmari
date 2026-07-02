import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldReturnPermit' })
export class LegacyHandheldReturnPermit {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldReturnPermitID' })
  handheldReturnPermitID: number;

  @Column({ type: 'bigint', name: 'ReturnPermitRef' })
  returnPermitRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'timestamp without time zone', name: 'HandheldCreationDate', nullable: true })
  handheldCreationDate: Date | null;

  @Column({ type: 'uuid', name: 'GUID' })
  gUID: string;

  @Column({ type: 'character varying', name: 'Latitude', nullable: true })
  latitude: string | null;

  @Column({ type: 'character varying', name: 'Longitude', nullable: true })
  longitude: string | null;

  @Column({ type: 'integer', name: 'Provider', nullable: true })
  provider: number | null;

  @Column({ type: 'numeric', name: 'Accuracy', nullable: true })
  accuracy: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'DeviceMobileDataState', nullable: true })
  deviceMobileDataState: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DeviceChangeDate', nullable: true })
  deviceChangeDate: Date | null;

}