import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerChangeStateReason' })
export class LegacyCustomerChangeStateReason {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerChangeStateReasonID' })
  customerChangeStateReasonID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}