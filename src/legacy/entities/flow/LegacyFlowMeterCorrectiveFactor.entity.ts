import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FlowMeterCorrectiveFactor' })
export class LegacyFlowMeterCorrectiveFactor {
  @PrimaryColumn({ type: 'bigint', name: 'FlowMeterCorrectiveFactorID' })
  flowMeterCorrectiveFactorID: number;

  @Column({ type: 'bigint', name: 'FlowMeterRef' })
  flowMeterRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'FactorType' })
  factorType: number;

  @Column({ type: 'numeric', name: 'FromValue' })
  fromValue: number;

  @Column({ type: 'numeric', name: 'ToValue' })
  toValue: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'Corrective' })
  corrective: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}