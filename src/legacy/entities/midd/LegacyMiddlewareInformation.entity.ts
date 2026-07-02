import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MiddlewareInformation' })
export class LegacyMiddlewareInformation {
  @PrimaryColumn({ type: 'bigint', name: 'MiddlewareInformationID' })
  middlewareInformationID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'LastReceiveDateTime', nullable: true })
  lastReceiveDateTime: Date | null;

  @Column({ type: 'character varying', name: 'MiddlewareVersion' })
  middlewareVersion: string;

  @Column({ type: 'character varying', name: 'ComputerName' })
  computerName: string;

  @Column({ type: 'character varying', name: 'MiddlewarePath' })
  middlewarePath: string;

  @Column({ type: 'character varying', name: 'IPAddresses' })
  iPAddresses: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}