import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StopAzinInfo' })
export class LegacyStopAzinInfo {
  @PrimaryColumn({ type: 'bigint', name: 'StopAzinInfoID' })
  stopAzinInfoID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'integer', name: 'StopAgument', nullable: true })
  stopAgument: number | null;

  @Column({ type: 'integer', name: 'StopKind', nullable: true })
  stopKind: number | null;

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