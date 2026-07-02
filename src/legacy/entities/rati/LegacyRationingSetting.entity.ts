import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationingSetting' })
export class LegacyRationingSetting {
  @PrimaryColumn({ type: 'bigint', name: 'RationingSettingID' })
  rationingSettingID: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate', nullable: true })
  toDate: Date | null;

  @Column({ type: 'integer', name: 'RationType' })
  rationType: number;

  @Column({ type: 'integer', name: 'BaseRationLevel' })
  baseRationLevel: number;

  @Column({ type: 'character varying', name: 'RationInventoryDetainInfoLabel1', nullable: true })
  rationInventoryDetainInfoLabel1: string | null;

  @Column({ type: 'character varying', name: 'RationInventoryDetainInfoLabel2', nullable: true })
  rationInventoryDetainInfoLabel2: string | null;

  @Column({ type: 'character varying', name: 'RationInventoryDetainInfoLabel3', nullable: true })
  rationInventoryDetainInfoLabel3: string | null;

  @Column({ type: 'character varying', name: 'RationInventoryDetainInfoLabel4', nullable: true })
  rationInventoryDetainInfoLabel4: string | null;

  @Column({ type: 'bigint', name: 'ProductGroupingPolicyParameterRef' })
  productGroupingPolicyParameterRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}