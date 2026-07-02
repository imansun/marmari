import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlineGatewayUserAccount' })
export class LegacyOnlineGatewayUserAccount {
  @PrimaryColumn({ type: 'bigint', name: 'OnlineGatewayUserAccountID' })
  onlineGatewayUserAccountID: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'OnlineGatewayRef' })
  onlineGatewayRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}