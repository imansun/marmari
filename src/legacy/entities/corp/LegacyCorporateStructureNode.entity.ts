import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CorporateStructureNode' })
export class LegacyCorporateStructureNode {
  @PrimaryColumn({ type: 'bigint', name: 'CorporateStructureNodeID' })
  corporateStructureNodeID: number;

  @Column({ type: 'bigint', name: 'ParentNodeRef', nullable: true })
  parentNodeRef: number | null;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bigint', name: 'CorporateStructureRef' })
  corporateStructureRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'OrderInSiblings', nullable: true })
  orderInSiblings: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}