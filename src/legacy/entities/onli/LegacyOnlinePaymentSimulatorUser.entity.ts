import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlinePaymentSimulatorUser' })
export class LegacyOnlinePaymentSimulatorUser {
  @PrimaryColumn({ type: 'bigint', name: 'OnlinePaymentSimulatorUserID' })
  onlinePaymentSimulatorUserID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'Role' })
  role: number;

  @Column({ type: 'integer', name: 'GenderType' })
  genderType: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}