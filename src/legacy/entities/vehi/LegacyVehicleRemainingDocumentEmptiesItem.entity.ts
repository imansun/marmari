import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VehicleRemainingDocumentEmptiesItem' })
export class LegacyVehicleRemainingDocumentEmptiesItem {
  @PrimaryColumn({ type: 'bigint', name: 'VehicleRemainingDocumentEmptiesItemID' })
  vehicleRemainingDocumentEmptiesItemID: number;

  @Column({ type: 'bigint', name: 'VehicleRemainingDocumentRef' })
  vehicleRemainingDocumentRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'numeric', name: 'InitialQuantity' })
  initialQuantity: number;

  @Column({ type: 'numeric', name: 'TransferQuantity' })
  transferQuantity: number;

  @Column({ type: 'numeric', name: 'ReductionQuantity' })
  reductionQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}