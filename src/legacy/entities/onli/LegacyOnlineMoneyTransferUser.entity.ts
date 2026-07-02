import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlineMoneyTransferUser' })
export class LegacyOnlineMoneyTransferUser {
  @PrimaryColumn({ type: 'bigint', name: 'OnlineMoneyTransferUserID' })
  onlineMoneyTransferUserID: number;

  @Column({ type: 'bigint', name: 'OnlineMoneyTransferRef' })
  onlineMoneyTransferRef: number;

  @Column({ type: 'character varying', name: 'FullName', nullable: true })
  fullName: string | null;

  @Column({ type: 'character varying', name: 'Role', nullable: true })
  role: string | null;

  @Column({ type: 'character varying', name: 'LastAction', nullable: true })
  lastAction: string | null;

  @Column({ type: 'timestamp without time zone', name: 'LastActionDate', nullable: true })
  lastActionDate: Date | null;

  @Column({ type: 'character varying', name: 'LastActionDescription', nullable: true })
  lastActionDescription: string | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}