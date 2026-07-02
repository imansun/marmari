import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferringReceiverPermission' })
export class LegacyReferringReceiverPermission {
  @PrimaryColumn({ type: 'bigint', name: 'ReferringReceiverPermissionID' })
  referringReceiverPermissionID: number;

  @Column({ type: 'bigint', name: 'SenderRef' })
  senderRef: number;

  @Column({ type: 'bigint', name: 'ReceiverRef' })
  receiverRef: number;

  @Column({ type: 'integer', name: 'AccessType' })
  accessType: number;

  @Column({ type: 'boolean', name: 'TwoWay', default: false })
  twoWay: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}