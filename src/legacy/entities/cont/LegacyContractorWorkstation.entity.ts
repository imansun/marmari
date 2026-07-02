import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractorWorkstation' })
export class LegacyContractorWorkstation {
  @PrimaryColumn({ type: 'bigint', name: 'ContractorWorkstationID' })
  contractorWorkstationID: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef' })
  workstationRef: number;

  @Column({ type: 'bigint', name: 'ContractorRef' })
  contractorRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}