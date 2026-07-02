import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StocktakingPolicySerial' })
export class LegacyStocktakingPolicySerial {
  @PrimaryColumn({ type: 'bigint', name: 'StocktakingPolicySerialID' })
  stocktakingPolicySerialID: number;

  @Column({ type: 'bigint', name: 'StocktakingPolicyRef', nullable: true })
  stocktakingPolicyRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}