import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractorReqPayment' })
export class LegacyContractorReqPayment {
  @PrimaryColumn({ type: 'bigint', name: 'ContractorReqPaymentID' })
  contractorReqPaymentID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Row' })
  row: number;

  @Column({ type: 'character varying', name: 'PaymentDasturNo', nullable: true })
  paymentDasturNo: string | null;

  @Column({ type: 'timestamp without time zone', name: 'RequestEntryDate', nullable: true })
  requestEntryDate: Date | null;

  @Column({ type: 'numeric', name: 'ReportagePerCent', nullable: true })
  reportagePerCent: number | null;

  @Column({ type: 'numeric', name: 'PaymentRequestAmount', nullable: true })
  paymentRequestAmount: number | null;

  @Column({ type: 'character varying', name: 'RespectiveGzarshkarNo', nullable: true })
  respectiveGzarshkarNo: string | null;

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