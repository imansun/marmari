import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessServiceOperation' })
export class LegacyProcessServiceOperation {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessServiceOperationID' })
  processServiceOperationID: number;

  @Column({ type: 'bigint', name: 'ProcessServiceContractRef' })
  processServiceContractRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}