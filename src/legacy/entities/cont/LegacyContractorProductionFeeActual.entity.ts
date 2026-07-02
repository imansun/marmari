import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractorProductionFeeActual' })
export class LegacyContractorProductionFeeActual {
  @PrimaryColumn({ type: 'bigint', name: 'ContractorProductionFeeActualID' })
  contractorProductionFeeActualID: number;

  @Column({ type: 'bigint', name: 'ContractorProductionRef' })
  contractorProductionRef: number;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'numeric', name: 'LabourFeeActual' })
  labourFeeActual: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}