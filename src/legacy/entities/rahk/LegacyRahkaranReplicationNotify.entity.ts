import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RahkaranReplicationNotify' })
export class LegacyRahkaranReplicationNotify {
  @PrimaryColumn({ type: 'bigint', name: 'RahkaranReplicationNotifyID' })
  rahkaranReplicationNotifyID: number;

  @Column({ type: 'character varying', name: 'Content' })
  content: string;

  @Column({ type: 'boolean', name: 'IsProcessed' })
  isProcessed: boolean;

  @Column({ type: 'character varying', name: 'ProcessType' })
  processType: string;

  @Column({ type: 'character varying', name: 'ErrorMessage', nullable: true })
  errorMessage: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'ProcessDate', nullable: true })
  processDate: Date | null;

}