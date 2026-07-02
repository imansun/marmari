import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompensationPaymentRequestType' })
export class LegacyCompensationPaymentRequestType {
  @PrimaryColumn({ type: 'bigint', name: 'CompensationPaymentRequestTypeID' })
  compensationPaymentRequestTypeID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'CompensationCalcTypeRef' })
  compensationCalcTypeRef: number;

  @Column({ type: 'integer', name: 'DataType' })
  dataType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

}