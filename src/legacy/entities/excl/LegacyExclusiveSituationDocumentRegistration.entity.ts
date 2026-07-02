import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExclusiveSituationDocumentRegistration' })
export class LegacyExclusiveSituationDocumentRegistration {
  @PrimaryColumn({ type: 'bigint', name: 'ExclusiveSituationDocumentRegistrationID' })
  exclusiveSituationDocumentRegistrationID: number;

  @Column({ type: 'bigint', name: 'SituationDocumentConfigurationRef' })
  situationDocumentConfigurationRef: number;

  @Column({ type: 'bigint', name: 'UserGroupRef', nullable: true })
  userGroupRef: number | null;

  @Column({ type: 'bigint', name: 'CashierRef', nullable: true })
  cashierRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}