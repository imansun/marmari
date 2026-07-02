import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IncomingContainer' })
export class LegacyIncomingContainer {
  @PrimaryColumn({ type: 'bigint', name: 'IncomingContainerID' })
  incomingContainerID: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'ReceivingPlaceType' })
  receivingPlaceType: number;

  @Column({ type: 'bigint', name: 'ReceivingPlaceRef' })
  receivingPlaceRef: number;

  @Column({ type: 'bigint', name: 'CargoRef' })
  cargoRef: number;

  @Column({ type: 'bigint', name: 'ContainerTypeRef' })
  containerTypeRef: number;

  @Column({ type: 'integer', name: 'CarrierType' })
  carrierType: number;

  @Column({ type: 'timestamp without time zone', name: 'IncomingDate' })
  incomingDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LoadingExpirationDate', nullable: true })
  loadingExpirationDate: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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