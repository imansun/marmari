import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RahkaranReplicationBusinessPersist' })
export class LegacyRahkaranReplicationBusinessPersist {
  @PrimaryColumn({ type: 'bigint', name: 'RahkaranReplicationBusinessPersistID' })
  rahkaranReplicationBusinessPersistID: number;

  @Column({ type: 'uuid', name: 'PackageID' })
  packageID: string;

  @Column({ type: 'bigint', name: 'SequenceID' })
  sequenceID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}