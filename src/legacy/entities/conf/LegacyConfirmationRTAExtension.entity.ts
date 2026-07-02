import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationRTAExtension' })
export class LegacyConfirmationRTAExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationRTAExtensionID' })
  confirmationRTAExtensionID: number;

  @Column({ type: 'bigint', name: 'ConfirmationResourceToolAssignmentRef' })
  confirmationResourceToolAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsageValue', nullable: true })
  usageValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}