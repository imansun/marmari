import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompletedScope' })
export class LegacyCompletedScope {
  @PrimaryColumn({ type: 'uuid' })
  uidInstanceID: string;

  @PrimaryColumn({ type: 'uuid' })
  completedScopeID: string;

  @PrimaryColumn({ type: 'bytea' })
  state: Buffer;

  @PrimaryColumn({ type: 'timestamp without time zone' })
  modified: Date;

}