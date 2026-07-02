import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LandedCost' })
export class LegacyLandedCost {
  @PrimaryColumn({ type: 'bigint', name: 'LandedCostId' })
  landedCostId: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'integer', name: 'ImpelementationUniqueCode' })
  impelementationUniqueCode: number;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

  @Column({ type: 'integer', name: 'GatheringType' })
  gatheringType: number;

  @Column({ type: 'integer', name: 'FeeSourceUniqueCode', nullable: true })
  feeSourceUniqueCode: number | null;

  @Column({ type: 'numeric', name: 'LandedCostInOperationalCurrency', nullable: true })
  landedCostInOperationalCurrency: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State', nullable: true })
  state: number | null;

  @Column({ type: 'boolean', name: 'NeedToSendPrice' })
  needToSendPrice: boolean;

  @Column({ type: 'boolean', name: 'NeedToIssueVoucher' })
  needToIssueVoucher: boolean;

  @Column({ type: 'numeric', name: 'EffectiveQuantity' })
  effectiveQuantity: number;

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