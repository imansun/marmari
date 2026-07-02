import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReconciliationDeploymentTreasuryOpenItem' })
export class LegacyReconciliationDeploymentTreasuryOpenItem {
  @PrimaryColumn({ type: 'bigint', name: 'ReconciliationDeploymentTreasuryOpenItemID' })
  reconciliationDeploymentTreasuryOpenItemID: number;

  @Column({ type: 'bigint', name: 'ReconciliationDeploymentRef' })
  reconciliationDeploymentRef: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'character varying', name: 'DocumentNumber' })
  documentNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'DocumentItemDate' })
  documentItemDate: Date;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'numeric', name: 'Debit', nullable: true })
  debit: number | null;

  @Column({ type: 'numeric', name: 'Credit', nullable: true })
  credit: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}