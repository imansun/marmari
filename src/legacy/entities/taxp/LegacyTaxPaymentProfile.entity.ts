import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPaymentProfile' })
export class LegacyTaxPaymentProfile {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPaymentProfileID' })
  taxPaymentProfileID: number;

  @Column({ type: 'integer', name: 'SendingType' })
  sendingType: number;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'character varying', name: 'DirectTaxMemoryID', nullable: true })
  directTaxMemoryID: string | null;

  @Column({ type: 'character varying', name: 'DirectPrivateKey', nullable: true })
  directPrivateKey: string | null;

  @Column({ type: 'character varying', name: 'DirectCertificate', nullable: true })
  directCertificate: string | null;

  @Column({ type: 'character varying', name: 'IndirectUserName', nullable: true })
  indirectUserName: string | null;

  @Column({ type: 'character varying', name: 'IndirectServicePass', nullable: true })
  indirectServicePass: string | null;

  @Column({ type: 'character varying', name: 'IndirectServiceKey', nullable: true })
  indirectServiceKey: string | null;

  @Column({ type: 'character varying', name: 'IndirectServiceAddress', nullable: true })
  indirectServiceAddress: string | null;

  @Column({ type: 'integer', name: 'IndirectCompany', nullable: true })
  indirectCompany: number | null;

  @Column({ type: 'uuid', name: 'UniqueKey' })
  uniqueKey: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'DirectTaxIsOnline', nullable: true })
  directTaxIsOnline: boolean | null;

  @Column({ type: 'timestamp without time zone', name: 'DirectTaxStatusLastUpdated', nullable: true })
  directTaxStatusLastUpdated: Date | null;

}