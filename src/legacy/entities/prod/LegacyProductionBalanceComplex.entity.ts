import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionBalanceComplex' })
export class LegacyProductionBalanceComplex {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionBalanceComplexID' })
  productionBalanceComplexID: number;

  @Column({ type: 'bigint', name: 'ProductionBalanceRef' })
  productionBalanceRef: number;

  @Column({ type: 'bigint', name: 'ComplexRef' })
  complexRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}