import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlinePaymentSimulatorCartableDestination' })
export class LegacyOnlinePaymentSimulatorCartableDestination {
  @PrimaryColumn({ type: 'bigint', name: 'OnlinePaymentSimulatorCartableDestinationID' })
  onlinePaymentSimulatorCartableDestinationID: number;

  @Column({ type: 'character varying', name: 'IBAN', nullable: true })
  iBAN: string | null;

  @Column({ type: 'character varying', name: 'DepositNumber', nullable: true })
  depositNumber: string | null;

  @Column({ type: 'character varying', name: 'Amount' })
  amount: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'OnlinePaymentSimulatorCartableRef' })
  onlinePaymentSimulatorCartableRef: number;

  @Column({ type: 'character varying', name: 'OwnerName', nullable: true })
  ownerName: string | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}