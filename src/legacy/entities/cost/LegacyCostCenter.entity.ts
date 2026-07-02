import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CostCenter' })
export class LegacyCostCenter {
  @PrimaryColumn({ type: 'bigint', name: 'CostCenterID' })
  costCenterID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Name_En', nullable: true })
  nameEn: string | null;

}