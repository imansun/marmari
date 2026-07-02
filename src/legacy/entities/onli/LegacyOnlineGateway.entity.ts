import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlineGateway' })
export class LegacyOnlineGateway {
  @PrimaryColumn({ type: 'bigint', name: 'OnlineGatewayID' })
  onlineGatewayID: number;

  @Column({ type: 'character varying', name: 'GatewayKey' })
  gatewayKey: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'boolean', name: 'IsPaymentServiceProviderGateway', default: false })
  isPaymentServiceProviderGateway: boolean;

  @Column({ type: 'bigint', name: 'PaymentServiceProviderCompanyRef', nullable: true })
  paymentServiceProviderCompanyRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}