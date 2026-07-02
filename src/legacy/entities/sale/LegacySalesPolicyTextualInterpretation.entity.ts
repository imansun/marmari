import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesPolicyTextualInterpretation' })
export class LegacySalesPolicyTextualInterpretation {
  @PrimaryColumn({ type: 'bigint', name: 'SalesPolicyTextualInterpretationID' })
  salesPolicyTextualInterpretationID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef' })
  businessPolicyConditionRowRef: number;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'bigint', name: 'ProductGroupRef', nullable: true })
  productGroupRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerGroupRef', nullable: true })
  customerGroupRef: number | null;

  @Column({ type: 'bigint', name: 'BrokerRef', nullable: true })
  brokerRef: number | null;

  @Column({ type: 'bigint', name: 'SalesOfficeRef', nullable: true })
  salesOfficeRef: number | null;

  @Column({ type: 'bigint', name: 'SalesAreaRef', nullable: true })
  salesAreaRef: number | null;

  @Column({ type: 'bigint', name: 'SalesTypeRef', nullable: true })
  salesTypeRef: number | null;

  @Column({ type: 'bigint', name: 'PaymentAgreementRef', nullable: true })
  paymentAgreementRef: number | null;

  @Column({ type: 'integer', name: 'PolicyType' })
  policyType: number;

  @Column({ type: 'integer', name: 'TargetDocuments' })
  targetDocuments: number;

  @Column({ type: 'character varying', name: 'Interpretation' })
  interpretation: string;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate', nullable: true })
  expirationDate: Date | null;

  @Column({ type: 'boolean', name: 'IsManual', default: false })
  isManual: boolean;

  @Column({ type: 'integer', name: 'SettlementRespite', nullable: true })
  settlementRespite: number | null;

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