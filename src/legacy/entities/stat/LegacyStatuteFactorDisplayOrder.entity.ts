import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StatuteFactorDisplayOrder' })
export class LegacyStatuteFactorDisplayOrder {
  @PrimaryColumn({ type: 'bigint', name: 'StatuteFactorDisplayOrderID' })
  statuteFactorDisplayOrderID: number;

  @Column({ type: 'bigint', name: 'StatuteFactorRef' })
  statuteFactorRef: number;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef' })
  employmentTypeRef: number;

  @Column({ type: 'integer', name: 'DisplayOrder' })
  displayOrder: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}