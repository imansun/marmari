import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExecutableTask' })
export class LegacyExecutableTask {
  @PrimaryColumn({ type: 'bigint', name: 'ExecutableTaskID' })
  executableTaskID: number;

  @Column({ type: 'character varying', name: 'ManagerTitle' })
  managerTitle: string;

  @Column({ type: 'character varying', name: 'ManagerKey' })
  managerKey: string;

  @Column({ type: 'character varying', name: 'RefrenceNumber', nullable: true })
  refrenceNumber: string | null;

  @Column({ type: 'bigint', name: 'RefrenceRef', nullable: true })
  refrenceRef: number | null;

  @Column({ type: 'character varying', name: 'TaskProcessorName' })
  taskProcessorName: string;

  @Column({ type: 'character varying', name: 'TaskProcessorKey' })
  taskProcessorKey: string;

  @Column({ type: 'timestamp without time zone', name: 'ReservationDateTime' })
  reservationDateTime: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'ErrorCode', default: 0 })
  errorCode: number;

  @Column({ type: 'character varying', name: 'ErrorData', nullable: true })
  errorData: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'character varying', name: 'ExecutionData', nullable: true })
  executionData: string | null;

  @Column({ type: 'bigint', name: 'Tick', default: 0 })
  tick: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}