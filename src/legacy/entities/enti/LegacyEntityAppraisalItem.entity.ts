import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityAppraisalItem' })
export class LegacyEntityAppraisalItem {
  @PrimaryColumn({ type: 'bigint', name: 'EntityAppraisalItemID' })
  entityAppraisalItemID: number;

  @Column({ type: 'bigint', name: 'EntityAppraisalRef' })
  entityAppraisalRef: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}