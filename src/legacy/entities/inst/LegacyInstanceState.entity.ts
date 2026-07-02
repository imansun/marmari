import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InstanceState' })
export class LegacyInstanceState {
  @PrimaryColumn({ type: 'bigint', name: 'InstanceStateID' })
  instanceStateID: number;

  @Column({ type: 'uuid' })
  uidInstanceID: string;

  @Column({ type: 'bytea', nullable: true })
  state: Buffer | null;

  @Column({ type: 'integer', nullable: true })
  status: number | null;

  @Column({ type: 'integer', nullable: true })
  unlocked: number | null;

  @Column({ type: 'integer', nullable: true })
  blocked: number | null;

  @Column({ type: 'text', nullable: true })
  info: string | null;

  @Column({ type: 'timestamp without time zone' })
  modified: Date;

  @Column({ type: 'uuid', nullable: true })
  ownerID: string | null;

  @Column({ type: 'timestamp without time zone', nullable: true })
  ownedUntil: Date | null;

  @Column({ type: 'timestamp without time zone', nullable: true })
  nextTimer: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}