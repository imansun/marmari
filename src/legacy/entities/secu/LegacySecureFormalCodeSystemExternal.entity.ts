import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SecureFormalCodeSystemExternal' })
export class LegacySecureFormalCodeSystemExternal {
  @PrimaryColumn({ type: 'bigint', name: 'SecureFormalCodeSystemExternalID' })
  secureFormalCodeSystemExternalID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

  @Column({ type: 'bigint', name: 'CountryRef', nullable: true })
  countryRef: number | null;

  @Column({ type: 'bigint', name: 'AssayCreditRef', nullable: true })
  assayCreditRef: number | null;

  @Column({ type: 'integer', name: 'Company', nullable: true })
  company: number | null;

  @Column({ type: 'bigint', name: 'CouplingFile', nullable: true })
  couplingFile: number | null;

  @Column({ type: 'bigint', name: 'Documentation', nullable: true })
  documentation: number | null;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'Comment', nullable: true })
  comment: string | null;

  @Column({ type: 'character varying', name: 'DisposabilityGoods', nullable: true })
  disposabilityGoods: string | null;

  @Column({ type: 'bigint', name: 'CompanyName1Ref', nullable: true })
  companyName1Ref: number | null;

  @Column({ type: 'character varying', name: 'Kala1Name', nullable: true })
  kala1Name: string | null;

  @Column({ type: 'character varying', name: 'AdditionComments', nullable: true })
  additionComments: string | null;

  @Column({ type: 'character varying', name: 'SupplementalComments', nullable: true })
  supplementalComments: string | null;

  @Column({ type: 'character varying', name: 'Trahyshdhtust', nullable: true })
  trahyshdhtust: string | null;

  @Column({ type: 'numeric', name: 'Bar1', nullable: true })
  bar1: number | null;

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