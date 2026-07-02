import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlineGatewayApi' })
export class LegacyOnlineGatewayApi {
  @PrimaryColumn({ type: 'bigint', name: 'OnlineGatewayApiID' })
  onlineGatewayApiID: number;

  @Column({ type: 'bigint', name: 'OnlineGatewayRef' })
  onlineGatewayRef: number;

  @Column({ type: 'integer', name: 'ApiCategory' })
  apiCategory: number;

  @Column({ type: 'character varying', name: 'ApiKey' })
  apiKey: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'DescriptionResourceKey', nullable: true })
  descriptionResourceKey: string | null;

  @Column({ type: 'integer', name: 'Level', default: 2 })
  level: number;

  @Column({ type: 'boolean', name: 'IsCustom', default: false })
  isCustom: boolean;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}