import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesArea' })
export class LegacySalesArea {
  @PrimaryColumn({ type: 'bigint', name: 'SalesAreaID' })
  salesAreaID: number;

  @Column({ type: 'bigint', name: 'SalesOrganizationRef' })
  salesOrganizationRef: number;

  @Column({ type: 'bigint', name: 'SalesChannelRef' })
  salesChannelRef: number;

  @Column({ type: 'bigint', name: 'DivisionRef' })
  divisionRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

}