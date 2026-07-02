import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoyaltyMember' })
export class LegacyLoyaltyMember {
  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyMemberID' })
  loyaltyMemberID: number;

  @Column({ type: 'bigint', name: 'LoyaltyMemberPatternRef' })
  loyaltyMemberPatternRef: number;

  @Column({ type: 'character varying', name: 'FirstName' })
  firstName: string;

  @Column({ type: 'character varying', name: 'LastName' })
  lastName: string;

  @Column({ type: 'integer', name: 'Gender', nullable: true })
  gender: number | null;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

  @Column({ type: 'character varying', name: 'NationalID', nullable: true })
  nationalID: string | null;

  @Column({ type: 'timestamp without time zone', name: 'BirthDate', nullable: true })
  birthDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'MarriageDate', nullable: true })
  marriageDate: Date | null;

  @Column({ type: 'character varying', name: 'TelephoneNo', nullable: true })
  telephoneNo: string | null;

  @Column({ type: 'character varying', name: 'EmailAddress', nullable: true })
  emailAddress: string | null;

  @Column({ type: 'bigint', name: 'RecommenderRef', nullable: true })
  recommenderRef: number | null;

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

  @Column({ type: 'bigint', name: 'MappedRecordRef', nullable: true })
  mappedRecordRef: number | null;

  @Column({ type: 'integer', name: 'State', default: 1 })
  state: number;

  @Column({ type: 'integer', name: 'MembershipType' })
  membershipType: number;

}