import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PermitHistory' })
export class LegacyPermitHistory {
  @PrimaryColumn({ type: 'bigint', name: 'PermitHistoryID' })
  permitHistoryID: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDateTime' })
  lastModificationDateTime: Date;

  @Column({ type: 'bigint', name: 'PermitRef' })
  permitRef: number;

  @Column({ type: 'boolean', name: 'Released' })
  released: boolean;

  @Column({ type: 'boolean', name: 'Finalized' })
  finalized: boolean;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}