import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ControllingPolicyParameterItem' })
export class LegacyControllingPolicyParameterItem {
  @PrimaryColumn({ type: 'bigint', name: 'ControllingPolicyParameterItemID' })
  controllingPolicyParameterItemID: number;

  @Column({ type: 'bigint', name: 'ControllingPolicyParameterRef' })
  controllingPolicyParameterRef: number;

  @Column({ type: 'bigint', name: 'LongValue', nullable: true })
  longValue: number | null;

  @Column({ type: 'integer', name: 'IntValue', nullable: true })
  intValue: number | null;

  @Column({ type: 'character varying', name: 'DisplayString', nullable: true })
  displayString: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}