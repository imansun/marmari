import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationingSegmentationSecurity' })
export class LegacyRationingSegmentationSecurity {
  @PrimaryColumn({ type: 'bigint', name: 'RationingSegmentationSecurityID' })
  rationingSegmentationSecurityID: number;

  @Column({ type: 'bigint', name: 'RationingParallelSegmentationRef' })
  rationingParallelSegmentationRef: number;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'bigint', name: 'UserGroupRef', nullable: true })
  userGroupRef: number | null;

  @Column({ type: 'integer', name: 'UserType' })
  userType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}