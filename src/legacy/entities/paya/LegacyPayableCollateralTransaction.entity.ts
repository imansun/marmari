import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PayableCollateralTransaction' })
export class LegacyPayableCollateralTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'PayableCollateralTransactionID' })
  payableCollateralTransactionID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'PayableCollateralRef' })
  payableCollateralRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'DueDate' })
  dueDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'PreviouseDueDate' })
  previouseDueDate: Date;

  @Column({ type: 'numeric', name: 'OperationAmount', nullable: true })
  operationAmount: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyOperationAmount', nullable: true })
  operationalCurrencyOperationAmount: number | null;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'integer', name: 'CollateralPermitCause', nullable: true })
  collateralPermitCause: number | null;

  @Column({ type: 'integer', name: 'CollateralOperationType' })
  collateralOperationType: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'CollateralPermitRef', nullable: true })
  collateralPermitRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}