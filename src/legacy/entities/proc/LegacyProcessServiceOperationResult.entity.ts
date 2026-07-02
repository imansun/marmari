import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessServiceOperationResult' })
export class LegacyProcessServiceOperationResult {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessServiceOperationResultID' })
  processServiceOperationResultID: number;

  @Column({ type: 'bigint', name: 'ProcessServiceOperationRef' })
  processServiceOperationRef: number;

  @Column({ type: 'character varying', name: 'MessageKey' })
  messageKey: string;

  @Column({ type: 'character varying', name: 'Parameters' })
  parameters: string;

  @Column({ type: 'character varying', name: 'Options' })
  options: string;

  @Column({ type: 'character varying', name: 'StatusMessage', nullable: true })
  statusMessage: string | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'timestamp without time zone', name: 'LastUpdate' })
  lastUpdate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}