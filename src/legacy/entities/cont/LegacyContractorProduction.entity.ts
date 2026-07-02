import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractorProduction' })
export class LegacyContractorProduction {
  @PrimaryColumn({ type: 'bigint', name: 'ContractorProductionID' })
  contractorProductionID: number;

  @Column({ type: 'bigint', name: 'ProductionRef' })
  productionRef: number;

  @Column({ type: 'bigint', name: 'ContractorRef' })
  contractorRef: number;

  @Column({ type: 'numeric', name: 'LabourFeeStandard' })
  labourFeeStandard: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}