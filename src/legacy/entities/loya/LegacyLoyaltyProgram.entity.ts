import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoyaltyProgram' })
export class LegacyLoyaltyProgram {
  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyProgramID' })
  loyaltyProgramID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsPointProfitType' })
  isPointProfitType: boolean;

  @Column({ type: 'bigint', name: 'LoyaltyPointTypeRef' })
  loyaltyPointTypeRef: number;

  @Column({ type: 'boolean', name: 'IsCreditProfitType' })
  isCreditProfitType: boolean;

  @Column({ type: 'timestamp without time zone', name: 'ValidFromDate' })
  validFromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ValidToDate', nullable: true })
  validToDate: Date | null;

  @Column({ type: 'bigint', name: 'LoyaltyMemberPatternRef' })
  loyaltyMemberPatternRef: number;

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

  @Column({ type: 'character varying', name: 'LoyaltyEnvironmentKey' })
  loyaltyEnvironmentKey: string;

  @Column({ type: 'boolean', name: 'IsNegativePointAmountAcceptable', default: false })
  isNegativePointAmountAcceptable: boolean;

  @Column({ type: 'boolean', name: 'IsNegativeCreditAmountAcceptable', default: false })
  isNegativeCreditAmountAcceptable: boolean;

  @Column({ type: 'boolean', name: 'AddCollectedPointAfterDowngrade' })
  addCollectedPointAfterDowngrade: boolean;

  @Column({ type: 'boolean', name: 'AutomaticMembership' })
  automaticMembership: boolean;

}