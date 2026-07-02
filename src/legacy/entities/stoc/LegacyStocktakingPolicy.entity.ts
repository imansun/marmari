import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StocktakingPolicy' })
export class LegacyStocktakingPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'StocktakingPolicyID' })
  stocktakingPolicyID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'StocktakingCount' })
  stocktakingCount: number;

  @Column({ type: 'integer', name: 'CardexType' })
  cardexType: number;

  @Column({ type: 'boolean', name: 'UseTrackingFactor' })
  useTrackingFactor: boolean;

  @Column({ type: 'boolean', name: 'InputOutputIsValid' })
  inputOutputIsValid: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'ValidateDiscrepancy' })
  validateDiscrepancy: boolean;

  @Column({ type: 'boolean', name: 'AddVariantVoucherAutomatically' })
  addVariantVoucherAutomatically: boolean;

  @Column({ type: 'bigint', name: 'FractionalVoucherSpecificationRef', nullable: true })
  fractionalVoucherSpecificationRef: number | null;

  @Column({ type: 'bigint', name: 'AdditionalVoucherSpecificationRef', nullable: true })
  additionalVoucherSpecificationRef: number | null;

  @Column({ type: 'integer', name: 'TypeOfPartGathering', nullable: true })
  typeOfPartGathering: number | null;

  @Column({ type: 'integer', name: 'FirstVariantPercent', nullable: true })
  firstVariantPercent: number | null;

  @Column({ type: 'boolean', name: 'DifferenceOfFirstAndSecondStocktaking' })
  differenceOfFirstAndSecondStocktaking: boolean;

  @Column({ type: 'integer', name: 'FirstAndSecondStocktakingVariantPercent', nullable: true })
  firstAndSecondStocktakingVariantPercent: number | null;

  @Column({ type: 'integer', name: 'OperatorOfFirstStocktakingAndStock', nullable: true })
  operatorOfFirstStocktakingAndStock: number | null;

  @Column({ type: 'boolean', name: 'DifferenceOfFirstStocktakingAndStock' })
  differenceOfFirstStocktakingAndStock: boolean;

  @Column({ type: 'integer', name: 'FirstStocktakingAndStockVariantPercent', nullable: true })
  firstStocktakingAndStockVariantPercent: number | null;

  @Column({ type: 'integer', name: 'OperatorOfSecondStocktakingAndStock', nullable: true })
  operatorOfSecondStocktakingAndStock: number | null;

  @Column({ type: 'boolean', name: 'DifferenceOfSecondStocktakingAndStock' })
  differenceOfSecondStocktakingAndStock: boolean;

  @Column({ type: 'integer', name: 'SecondStocktakingAndStockVariantPercent', nullable: true })
  secondStocktakingAndStockVariantPercent: number | null;

  @Column({ type: 'boolean', name: 'IncludePartsWithNoTransaction' })
  includePartsWithNoTransaction: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'boolean', name: 'AllowVoucherInLastDayOfStocktaking' })
  allowVoucherInLastDayOfStocktaking: boolean;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'numeric', name: 'FirstVariantQuantity', nullable: true })
  firstVariantQuantity: number | null;

  @Column({ type: 'integer', name: 'OperatorOfSecondCountFee', nullable: true })
  operatorOfSecondCountFee: number | null;

  @Column({ type: 'numeric', name: 'SecondCountAtLeastFee', nullable: true })
  secondCountAtLeastFee: number | null;

  @Column({ type: 'numeric', name: 'FirstAndSecondStocktakingVariantQuantity', nullable: true })
  firstAndSecondStocktakingVariantQuantity: number | null;

  @Column({ type: 'numeric', name: 'FirstStocktakingAndStockVariantQuantity', nullable: true })
  firstStocktakingAndStockVariantQuantity: number | null;

  @Column({ type: 'numeric', name: 'SecondStocktakingAndStockVariantQuantity', nullable: true })
  secondStocktakingAndStockVariantQuantity: number | null;

  @Column({ type: 'integer', name: 'OperatorOfThirdCountFee', nullable: true })
  operatorOfThirdCountFee: number | null;

  @Column({ type: 'boolean', name: 'DifferenceOfThirdCountAtLeastFee', default: false })
  differenceOfThirdCountAtLeastFee: boolean;

  @Column({ type: 'numeric', name: 'ThirdCountAtLeastFee', nullable: true })
  thirdCountAtLeastFee: number | null;

  @Column({ type: 'boolean', name: 'UseZone', default: false })
  useZone: boolean;

  @Column({ type: 'boolean', name: 'AllowAddingPartToListWhileStocktaking' })
  allowAddingPartToListWhileStocktaking: boolean;

  @Column({ type: 'boolean', name: 'ControlPreviousCountingStepMustBeFinished' })
  controlPreviousCountingStepMustBeFinished: boolean;

}