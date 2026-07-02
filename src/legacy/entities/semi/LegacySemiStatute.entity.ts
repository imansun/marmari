import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SemiStatute' })
export class LegacySemiStatute {
  @PrimaryColumn({ type: 'bigint', name: 'SemiStatuteID' })
  semiStatuteID: number;

  @Column({ type: 'bigint', name: 'PersonRef' })
  personRef: number;

  @Column({ type: 'bigint', name: 'StructureRef' })
  structureRef: number;

  @Column({ type: 'bigint', name: 'JobRef', nullable: true })
  jobRef: number | null;

  @Column({ type: 'boolean', name: 'IsDeleted' })
  isDeleted: boolean;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

  @Column({ type: 'bigint', name: 'PositionRef' })
  positionRef: number;

  @Column({ type: 'bigint', name: 'OrganizationUnitRef' })
  organizationUnitRef: number;

  @Column({ type: 'integer', name: 'SemiStatuteType' })
  semiStatuteType: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ConflictDate', nullable: true })
  conflictDate: Date | null;

}