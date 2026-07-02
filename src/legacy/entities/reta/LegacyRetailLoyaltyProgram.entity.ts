import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailLoyaltyProgram' })
export class LegacyRetailLoyaltyProgram {
  @PrimaryColumn({ type: 'bigint', name: 'RetailLoyaltyProgramID' })
  retailLoyaltyProgramID: number;

  @Column({ type: 'bigint', name: 'LoyaltyProgramRef' })
  loyaltyProgramRef: number;

  @Column({ type: 'integer', name: 'PointCalculationBasis', nullable: true })
  pointCalculationBasis: number | null;

  @Column({ type: 'boolean', name: 'StopPointCalculationOnReceiveOtherSettlementMethods' })
  stopPointCalculationOnReceiveOtherSettlementMethods: boolean;

  @Column({ type: 'integer', name: 'CreditCalculationBasis', nullable: true })
  creditCalculationBasis: number | null;

  @Column({ type: 'boolean', name: 'StopCreditCalculationOnReceiveOtherSettlementMethods' })
  stopCreditCalculationOnReceiveOtherSettlementMethods: boolean;

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