import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartOrderTask' })
export class LegacyPartOrderTask {
  @PrimaryColumn({ type: 'bigint', name: 'PartOrderTaskID' })
  partOrderTaskID: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'uuid', name: 'ReferenceUniqueID' })
  referenceUniqueID: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'CallingStatus', nullable: true })
  callingStatus: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}