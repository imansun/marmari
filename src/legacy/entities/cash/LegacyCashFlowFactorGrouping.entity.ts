import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CashFlowFactorGrouping' })
export class LegacyCashFlowFactorGrouping {
  @PrimaryColumn({ type: 'bigint', name: 'CashFlowFactorGroupingID' })
  cashFlowFactorGroupingID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}