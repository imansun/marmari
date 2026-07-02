import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlinePaymentSimulatorCartable' })
export class LegacyOnlinePaymentSimulatorCartable {
  @PrimaryColumn({ type: 'bigint', name: 'OnlinePaymentSimulatorCartableID' })
  onlinePaymentSimulatorCartableID: number;

  @Column({ type: 'integer', name: 'TransferType' })
  transferType: number;

  @Column({ type: 'character varying', name: 'SourceDepositNumber' })
  sourceDepositNumber: string;

  @Column({ type: 'character varying', name: 'SourceDescription', nullable: true })
  sourceDescription: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpiryDate' })
  expiryDate: Date;

  @Column({ type: 'integer', name: 'CartableStatus' })
  cartableStatus: number;

  @Column({ type: 'character varying', name: 'ReferenceId', nullable: true })
  referenceId: string | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}