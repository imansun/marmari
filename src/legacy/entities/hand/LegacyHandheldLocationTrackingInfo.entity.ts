import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldLocationTrackingInfo' })
export class LegacyHandheldLocationTrackingInfo {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldLocationTrackingInfoID' })
  handheldLocationTrackingInfoID: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bigint', name: 'HandheldDeviceRef' })
  handheldDeviceRef: number;

  @Column({ type: 'bigint', name: 'TourRef', nullable: true })
  tourRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ServerDate' })
  serverDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'HandheldDate' })
  handheldDate: Date;

  @Column({ type: 'character varying', name: 'Latitude', nullable: true })
  latitude: string | null;

  @Column({ type: 'character varying', name: 'Longitude', nullable: true })
  longitude: string | null;

  @Column({ type: 'integer', name: 'Provider', nullable: true })
  provider: number | null;

  @Column({ type: 'numeric', name: 'Accuracy', nullable: true })
  accuracy: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}