import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BrokerServiceCutsAndCosts' })
export class LegacyBrokerServiceCutsAndCosts {
  @PrimaryColumn({ type: 'bigint', name: 'BrokerServiceCutsAndCostsID' })
  brokerServiceCutsAndCostsID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'EffectType' })
  effectType: number;

  @Column({ type: 'integer', name: 'CalculationPrecedence' })
  calculationPrecedence: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'Temp', nullable: true })
  temp: boolean | null;

}