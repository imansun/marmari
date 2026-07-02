import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Person' })
export class LegacyPerson {
  @PrimaryColumn({ type: 'bigint', name: 'PersonID' })
  personID: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'character varying', name: 'EmailAddress', nullable: true })
  emailAddress: string | null;

  @Column({ type: 'integer', name: 'InteractionType' })
  interactionType: number;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

  @Column({ type: 'bigint', name: 'ReplacedPersonRef', nullable: true })
  replacedPersonRef: number | null;

}