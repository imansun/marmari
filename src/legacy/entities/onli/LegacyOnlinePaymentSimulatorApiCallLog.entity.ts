import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlinePaymentSimulatorApiCallLog' })
export class LegacyOnlinePaymentSimulatorApiCallLog {
  @PrimaryColumn({ type: 'bigint', name: 'OnlinePaymentSimulatorApiCallLogID' })
  onlinePaymentSimulatorApiCallLogID: number;

  @Column({ type: 'character varying', name: 'ApiName' })
  apiName: string;

  @Column({ type: 'timestamp without time zone', name: 'DateCalled' })
  dateCalled: Date;

  @Column({ type: 'character varying', name: 'FinalResult' })
  finalResult: string;

  @Column({ type: 'character varying', name: 'RequestContent' })
  requestContent: string;

  @Column({ type: 'boolean', name: 'Failed' })
  failed: boolean;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}