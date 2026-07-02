import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DamageRootCause' })
export class LegacyDamageRootCause {
  @PrimaryColumn({ type: 'bigint', name: 'DamageRootCauseID' })
  damageRootCauseID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}