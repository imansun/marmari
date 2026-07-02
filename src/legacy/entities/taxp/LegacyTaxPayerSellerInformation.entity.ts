import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerSellerInformation' })
export class LegacyTaxPayerSellerInformation {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerSellerInformationID' })
  taxPayerSellerInformationID: number;

  @Column({ type: 'integer', name: 'PartyType' })
  partyType: number;

  @Column({ type: 'character varying', name: 'NationalID', nullable: true })
  nationalID: string | null;

  @Column({ type: 'character varying', name: 'NationalCode', nullable: true })
  nationalCode: string | null;

  @Column({ type: 'character varying', name: 'EconomicID', nullable: true })
  economicID: string | null;

  @Column({ type: 'character varying', name: 'CivilParticipationID', nullable: true })
  civilParticipationID: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}