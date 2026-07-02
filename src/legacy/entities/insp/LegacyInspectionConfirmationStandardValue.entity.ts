import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionConfirmationStandardValue' })
export class LegacyInspectionConfirmationStandardValue {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionConfirmationStandardValueID' })
  inspectionConfirmationStandardValueID: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationRef' })
  inspectionConfirmationRef: number;

  @Column({ type: 'bigint', name: 'InspectionOperationStandardValueRef' })
  inspectionOperationStandardValueRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}