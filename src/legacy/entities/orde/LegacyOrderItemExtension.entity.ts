import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrderItemExtension' })
export class LegacyOrderItemExtension {
  @PrimaryColumn({ type: 'bigint', name: 'OrderItemExtensionID' })
  orderItemExtensionID: number;

  @Column({ type: 'bigint', name: 'OrderExtensionRef' })
  orderExtensionRef: number;

  @Column({ type: 'bigint', name: 'OrderItemRef' })
  orderItemRef: number;

  @Column({ type: 'integer', name: 'OCInstruction', nullable: true })
  oCInstruction: number | null;

  @Column({ type: 'integer', name: 'AsnInstruction', nullable: true })
  asnInstruction: number | null;

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

  @Column({ type: 'timestamp without time zone', name: 'DemandDate', nullable: true })
  demandDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}