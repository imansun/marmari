import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrderExtension' })
export class LegacyOrderExtension {
  @PrimaryColumn({ type: 'bigint', name: 'OrderExtensionID' })
  orderExtensionID: number;

  @Column({ type: 'bigint', name: 'OrderRef' })
  orderRef: number;

  @Column({ type: 'integer', name: 'OCInstruction' })
  oCInstruction: number;

  @Column({ type: 'integer', name: 'AsnInstruction' })
  asnInstruction: number;

  @Column({ type: 'integer', name: 'AmountToleranceType', nullable: true })
  amountToleranceType: number | null;

  @Column({ type: 'numeric', name: 'AmountToleranceHighLimit', nullable: true })
  amountToleranceHighLimit: number | null;

  @Column({ type: 'numeric', name: 'AmountToleranceLowLimit', nullable: true })
  amountToleranceLowLimit: number | null;

  @Column({ type: 'integer', name: 'DateToleranceType', nullable: true })
  dateToleranceType: number | null;

  @Column({ type: 'integer', name: 'DateToleranceHighLimit', nullable: true })
  dateToleranceHighLimit: number | null;

  @Column({ type: 'integer', name: 'DateToleranceLowLimit', nullable: true })
  dateToleranceLowLimit: number | null;

  @Column({ type: 'integer', name: 'FeeToleranceType', nullable: true })
  feeToleranceType: number | null;

  @Column({ type: 'numeric', name: 'FeeToleranceHighLimit', nullable: true })
  feeToleranceHighLimit: number | null;

  @Column({ type: 'numeric', name: 'FeeToleranceLowLimit', nullable: true })
  feeToleranceLowLimit: number | null;

  @Column({ type: 'boolean', name: 'CanIgnoreTolerance', nullable: true })
  canIgnoreTolerance: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}