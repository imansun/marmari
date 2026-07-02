import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MiscCostTargetEntity' })
export class LegacyMiscCostTargetEntity {
  @PrimaryColumn({ type: 'bigint', name: 'MiscCostTargetEntityID' })
  miscCostTargetEntityID: number;

  @Column({ type: 'bigint', name: 'MiscCostRef' })
  miscCostRef: number;

  @Column({ type: 'character varying', name: 'ComponentName' })
  componentName: string;

  @Column({ type: 'character varying', name: 'EntityName' })
  entityName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}