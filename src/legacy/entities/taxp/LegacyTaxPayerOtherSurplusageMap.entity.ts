import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerOtherSurplusageMap' })
export class LegacyTaxPayerOtherSurplusageMap {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerOtherSurplusageMapID' })
  taxPayerOtherSurplusageMapID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'TaxPayerUnitRef' })
  taxPayerUnitRef: number;

  @Column({ type: 'character varying', name: 'TaxPayerServiceName' })
  taxPayerServiceName: string;

  @Column({ type: 'character varying', name: 'TaxPayerServiceID', nullable: true })
  taxPayerServiceID: string | null;

  @Column({ type: 'integer', name: 'TaxFreeORTaxable' })
  taxFreeORTaxable: number;

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