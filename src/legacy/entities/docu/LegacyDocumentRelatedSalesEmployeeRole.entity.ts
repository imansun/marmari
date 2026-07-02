import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DocumentRelatedSalesEmployeeRole' })
export class LegacyDocumentRelatedSalesEmployeeRole {
  @PrimaryColumn({ type: 'bigint', name: 'DocumentRelatedSalesEmployeeRoleID' })
  documentRelatedSalesEmployeeRoleID: number;

  @Column({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number;

  @Column({ type: 'integer', name: 'DocumentCode' })
  documentCode: number;

  @Column({ type: 'bigint', name: 'SalesEmployeeRoleRef' })
  salesEmployeeRoleRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}