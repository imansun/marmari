import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidMessageProgress' })
export class LegacyRfidMessageProgress {
  @PrimaryColumn({ type: 'bigint', name: 'RfidMessageProgressID' })
  rfidMessageProgressID: number;

  @Column({ type: 'uuid', name: 'MessageId' })
  messageId: string;

  @Column({ type: 'integer', name: 'PassedCount' })
  passedCount: number;

  @Column({ type: 'integer', name: 'TotalCount' })
  totalCount: number;

  @Column({ type: 'character varying', name: 'Metadata', nullable: true })
  metadata: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}