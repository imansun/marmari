import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoyaltyProgramMember' })
export class LegacyLoyaltyProgramMember {
  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyProgramMemberID' })
  loyaltyProgramMemberID: number;

  @Column({ type: 'bigint', name: 'LoyaltyProgramRef' })
  loyaltyProgramRef: number;

  @Column({ type: 'bigint', name: 'LoyaltyMemberRef' })
  loyaltyMemberRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}