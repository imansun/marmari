import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesEmployeeRoleSalesDocument' })
export class LegacySalesEmployeeRoleSalesDocument {
  @PrimaryColumn({ type: 'bigint', name: 'SalesEmployeeRoleSalesDocumentID' })
  salesEmployeeRoleSalesDocumentID: number;

  @Column({ type: 'bigint', name: 'SalesEmployeeRoleRef' })
  salesEmployeeRoleRef: number;

  @Column({ type: 'integer', name: 'SalesDocumentCode' })
  salesDocumentCode: number;

  @Column({ type: 'boolean', name: 'IsMandatory' })
  isMandatory: boolean;

  @Column({ type: 'boolean', name: 'IsTransferFromReferenceDocument' })
  isTransferFromReferenceDocument: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}