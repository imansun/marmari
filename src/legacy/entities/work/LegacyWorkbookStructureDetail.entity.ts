import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkbookStructureDetail' })
export class LegacyWorkbookStructureDetail {
  @PrimaryColumn({ type: 'bigint', name: 'WorkbookStructureDetailID' })
  workbookStructureDetailID: number;

  @Column({ type: 'bigint', name: 'WorkbookStructureRef' })
  workbookStructureRef: number;

  @Column({ type: 'integer', name: 'CompareGroupCode' })
  compareGroupCode: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}