import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalController' })
export class LegacyRfidLocalController {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalControllerID' })
  rfidLocalControllerID: number;

  @Column({ type: 'bigint', name: 'RfidLocalEndPointRef' })
  rfidLocalEndPointRef: number;

  @Column({ type: 'integer', name: 'RfidLocalGateCode' })
  rfidLocalGateCode: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Index' })
  index: number;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'boolean', name: 'FingerPrint' })
  fingerPrint: boolean;

  @Column({ type: 'boolean', name: 'Secured' })
  secured: boolean;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}