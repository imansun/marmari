import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransposeTransferSetting' })
export class LegacyTransposeTransferSetting {
  @PrimaryColumn({ type: 'bigint', name: 'TransposeTransferSettingID' })
  transposeTransferSettingID: number;

  @Column({ type: 'bigint', name: 'TransposeSettingEntityRef' })
  transposeSettingEntityRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

  @Column({ type: 'bigint', name: 'TransposePatternRef', nullable: true })
  transposePatternRef: number | null;

  @Column({ type: 'character varying', name: 'DestinationNumber', nullable: true })
  destinationNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DestinationDate' })
  destinationDate: Date;

  @Column({ type: 'integer', name: 'DestinationPeriodNatureType' })
  destinationPeriodNatureType: number;

  @Column({ type: 'integer', name: 'DestinationCarryOverFiscalYearRef', nullable: true })
  destinationCarryOverFiscalYearRef: number | null;

  @Column({ type: 'bigint', name: 'DestinationBudgetEntityTypeRef', nullable: true })
  destinationBudgetEntityTypeRef: number | null;

  @Column({ type: 'bigint', name: 'DestinationBranchRef', nullable: true })
  destinationBranchRef: number | null;

  @Column({ type: 'character varying', name: 'DestinationDescription', nullable: true })
  destinationDescription: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}