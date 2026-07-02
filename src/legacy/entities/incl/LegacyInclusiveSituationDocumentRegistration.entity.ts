import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InclusiveSituationDocumentRegistration' })
export class LegacyInclusiveSituationDocumentRegistration {
  @PrimaryColumn({ type: 'bigint', name: 'InclusiveSituationDocumentRegistrationID' })
  inclusiveSituationDocumentRegistrationID: number;

  @Column({ type: 'bigint', name: 'SituationDocumentConfigurationRef' })
  situationDocumentConfigurationRef: number;

  @Column({ type: 'bigint', name: 'UserGroupRef', nullable: true })
  userGroupRef: number | null;

  @Column({ type: 'bigint', name: 'CashierRef', nullable: true })
  cashierRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}