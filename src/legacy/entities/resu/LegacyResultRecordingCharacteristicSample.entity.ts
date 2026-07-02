import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ResultRecordingCharacteristicSample' })
export class LegacyResultRecordingCharacteristicSample {
  @PrimaryColumn({ type: 'bigint', name: 'ResultRecordingCharacteristicSampleID' })
  resultRecordingCharacteristicSampleID: number;

  @Column({ type: 'integer', name: 'SampleSeries' })
  sampleSeries: number;

  @Column({ type: 'integer', name: 'SampleSize', nullable: true })
  sampleSize: number | null;

  @Column({ type: 'integer', name: 'InspectedQuantity', nullable: true })
  inspectedQuantity: number | null;

  @Column({ type: 'integer', name: 'AcceptedQuantity', nullable: true })
  acceptedQuantity: number | null;

  @Column({ type: 'integer', name: 'RejectedQuantity', nullable: true })
  rejectedQuantity: number | null;

  @Column({ type: 'integer', name: 'QuantityAboveUpperLimit', nullable: true })
  quantityAboveUpperLimit: number | null;

  @Column({ type: 'integer', name: 'QuantityBelowLowerLimit', nullable: true })
  quantityBelowLowerLimit: number | null;

  @Column({ type: 'numeric', name: 'Min', nullable: true })
  min: number | null;

  @Column({ type: 'numeric', name: 'Max', nullable: true })
  max: number | null;

  @Column({ type: 'numeric', name: 'Range', nullable: true })
  range: number | null;

  @Column({ type: 'numeric', name: 'Average', nullable: true })
  average: number | null;

  @Column({ type: 'numeric', name: 'StandardDeviation', nullable: true })
  standardDeviation: number | null;

  @Column({ type: 'bigint', name: 'ResultRecordingCharacteristicRef' })
  resultRecordingCharacteristicRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'UpperQualityIndex', nullable: true })
  upperQualityIndex: number | null;

  @Column({ type: 'numeric', name: 'LowerQualityIndex', nullable: true })
  lowerQualityIndex: number | null;

  @Column({ type: 'numeric', name: 'KValue', nullable: true })
  kValue: number | null;

  @Column({ type: 'numeric', name: 'FValue', nullable: true })
  fValue: number | null;

  @Column({ type: 'numeric', name: 'SampleFValue', nullable: true })
  sampleFValue: number | null;

  @Column({ type: 'integer', name: 'UpperQualityIndexType' })
  upperQualityIndexType: number;

  @Column({ type: 'integer', name: 'LowerQualityIndexType' })
  lowerQualityIndexType: number;

  @Column({ type: 'integer', name: 'SampleFValueType' })
  sampleFValueType: number;

}