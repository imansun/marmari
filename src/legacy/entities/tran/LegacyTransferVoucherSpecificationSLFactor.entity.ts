import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransferVoucherSpecificationSLFactor' })
export class LegacyTransferVoucherSpecificationSLFactor {
  @PrimaryColumn({ type: 'bigint', name: 'TransferVoucherSpecificationSLFactorID' })
  transferVoucherSpecificationSLFactorID: number;

  @Column({ type: 'bigint', name: 'TransferVoucherSpecificationSLRef' })
  transferVoucherSpecificationSLRef: number;

  @Column({ type: 'bigint', name: 'CompensationFactorRef' })
  compensationFactorRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}