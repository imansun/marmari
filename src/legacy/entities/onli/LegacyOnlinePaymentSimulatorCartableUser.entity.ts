import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlinePaymentSimulatorCartableUser' })
export class LegacyOnlinePaymentSimulatorCartableUser {
  @PrimaryColumn({ type: 'bigint', name: 'OnlinePaymentSimulatorCartableUserID' })
  onlinePaymentSimulatorCartableUserID: number;

  @Column({ type: 'bigint', name: 'OnlinePaymentSimulatorCartableRef' })
  onlinePaymentSimulatorCartableRef: number;

  @Column({ type: 'bigint', name: 'OnlinePaymentSimulatorUserRef' })
  onlinePaymentSimulatorUserRef: number;

  @Column({ type: 'integer', name: 'LastAction' })
  lastAction: number;

  @Column({ type: 'timestamp without time zone', name: 'LastActionDate' })
  lastActionDate: Date;

  @Column({ type: 'character varying', name: 'LastActionNote', nullable: true })
  lastActionNote: string | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}