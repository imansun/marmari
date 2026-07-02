import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExpenditureClass' })
export class LegacyExpenditureClass {
  @PrimaryColumn({ type: 'bigint', name: 'ExpenditureClassID' })
  expenditureClassID: number;

  @Column({ type: 'integer', name: 'Code' })
  code: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'boolean', name: 'State' })
  state: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}