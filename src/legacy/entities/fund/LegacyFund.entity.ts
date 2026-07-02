import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Fund' })
export class LegacyFund {
  @PrimaryColumn({ type: 'bigint', name: 'FundID' })
  fundID: number;

  @Column({ type: 'bigint', name: 'FundTypeRef' })
  fundTypeRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'integer', name: 'FundClass' })
  fundClass: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'ArrangementType', default: 0 })
  arrangementType: number;

}