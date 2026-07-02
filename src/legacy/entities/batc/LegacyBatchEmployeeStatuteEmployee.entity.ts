import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchEmployeeStatuteEmployee' })
export class LegacyBatchEmployeeStatuteEmployee {
  @PrimaryColumn({ type: 'bigint', name: 'BatchEmployeeStatuteEmployeeID' })
  batchEmployeeStatuteEmployeeID: number;

  @Column({ type: 'bigint', name: 'BatchEmployeeStatuteRef' })
  batchEmployeeStatuteRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'character varying', name: 'StatusMessage', nullable: true })
  statusMessage: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bigint', name: 'PromotionProcessRef', nullable: true })
  promotionProcessRef: number | null;

}