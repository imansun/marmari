import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceHistory' })
export class LegacyServiceHistory {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceHistoryID' })
  serviceHistoryID: number;

  @Column({ type: 'bigint', name: 'ServiceRef' })
  serviceRef: number;

  @Column({ type: 'boolean', name: 'DoesNeedToOtherMaintenanceDocumentsToBeClosed', default: false })
  doesNeedToOtherMaintenanceDocumentsToBeClosed: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}