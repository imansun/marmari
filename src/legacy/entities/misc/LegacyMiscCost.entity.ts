import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MiscCost' })
export class LegacyMiscCost {
  @PrimaryColumn({ type: 'bigint', name: 'MiscCostID' })
  miscCostID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'DefaultEffectType' })
  defaultEffectType: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'integer', name: 'CostSharingMethod', nullable: true })
  costSharingMethod: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'CostSharingMethodIsEditable' })
  costSharingMethodIsEditable: boolean;

}