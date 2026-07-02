import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlineGatewayUserAccountApi' })
export class LegacyOnlineGatewayUserAccountApi {
  @PrimaryColumn({ type: 'bigint', name: 'OnlineGatewayUserAccountApiID' })
  onlineGatewayUserAccountApiID: number;

  @Column({ type: 'bigint', name: 'OnlineGatewayUserAccountRef' })
  onlineGatewayUserAccountRef: number;

  @Column({ type: 'bigint', name: 'OnlineGatewayApiRef' })
  onlineGatewayApiRef: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}