import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DocumentDelivery' })
export class LegacyDocumentDelivery {
  @PrimaryColumn({ type: 'bigint', name: 'DocumentDeliveryID' })
  documentDeliveryID: number;

  @Column({ type: 'timestamp without time zone', name: 'DeliveryDateTime', nullable: true })
  deliveryDateTime: Date | null;

  @Column({ type: 'bigint', name: 'CustomerAddressRef', nullable: true })
  customerAddressRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'RecipientType', nullable: true, default: 1 })
  recipientType: number | null;

}