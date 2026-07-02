import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Service' })
export class LegacyService {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceID' })
  serviceID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'integer', name: 'Priority', nullable: true })
  priority: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ValidFrom', nullable: true })
  validFrom: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ValidTo', nullable: true })
  validTo: Date | null;

  @Column({ type: 'boolean', name: 'IsInspection', default: false })
  isInspection: boolean;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate', nullable: true })
  effectiveDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'DoesNeedToOtherMaintenanceDocumentsToBeClosed', default: true })
  doesNeedToOtherMaintenanceDocumentsToBeClosed: boolean;

  @Column({ type: 'boolean', name: 'IsInspectionAdvance', default: false })
  isInspectionAdvance: boolean;

}