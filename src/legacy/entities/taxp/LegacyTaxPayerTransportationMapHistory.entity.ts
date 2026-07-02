import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerTransportationMapHistory' })
export class LegacyTaxPayerTransportationMapHistory {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerTransportationMapID' })
  taxPayerTransportationMapID: number;

  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerUnitRef' })
  taxPayerUnitRef: number;

  @PrimaryColumn({ type: 'character varying', name: 'TaxPayerServiceName' })
  taxPayerServiceName: string;

  @PrimaryColumn({ type: 'character varying', name: 'TaxPayerServiceID' })
  taxPayerServiceID: string | null;

  @PrimaryColumn({ type: 'integer', name: 'TaxFreeORTaxable' })
  taxFreeORTaxable: number;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'ValidFrom' })
  validFrom: Date;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'ValidTo' })
  validTo: Date;

}