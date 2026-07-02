import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountType' })
export class LegacyAccountType {
  @PrimaryColumn({ type: 'bigint', name: 'AccountTypeID' })
  accountTypeID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'CategoryType' })
  categoryType: number;

  @Column({ type: 'boolean', name: 'IsCreditable' })
  isCreditable: boolean;

  @Column({ type: 'boolean', name: 'IsStatic' })
  isStatic: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}