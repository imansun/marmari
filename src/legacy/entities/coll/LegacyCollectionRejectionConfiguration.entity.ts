import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CollectionRejectionConfiguration' })
export class LegacyCollectionRejectionConfiguration {
  @PrimaryColumn({ type: 'bigint', name: 'CollectionRejectionConfigurationID' })
  collectionRejectionConfigurationID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'RejectionIsLastStateForCollection' })
  rejectionIsLastStateForCollection: boolean;

  @Column({ type: 'boolean', name: 'AtLeastOneRejectionForCollection' })
  atLeastOneRejectionForCollection: boolean;

  @Column({ type: 'boolean', name: 'InTheBankForCollection' })
  inTheBankForCollection: boolean;

  @Column({ type: 'boolean', name: 'InTheCasheForCollection' })
  inTheCasheForCollection: boolean;

  @Column({ type: 'boolean', name: 'NotExpiredDelieverReceivableChequeForCollection' })
  notExpiredDelieverReceivableChequeForCollection: boolean;

  @Column({ type: 'boolean', name: 'RejectionIsLastStateForRejection' })
  rejectionIsLastStateForRejection: boolean;

  @Column({ type: 'boolean', name: 'AtLeastOnRejectionForRejection' })
  atLeastOnRejectionForRejection: boolean;

  @Column({ type: 'boolean', name: 'InTheCasheForRejection' })
  inTheCasheForRejection: boolean;

  @Column({ type: 'boolean', name: 'InTheCollectorForCollection' })
  inTheCollectorForCollection: boolean;

  @Column({ type: 'boolean', name: 'InTheCollectorForRejection' })
  inTheCollectorForRejection: boolean;

  @Column({ type: 'boolean', name: 'NotInProgressiveCollectionForCollection' })
  notInProgressiveCollectionForCollection: boolean;

  @Column({ type: 'boolean', name: 'NotInProgressiveCollectionForRejection' })
  notInProgressiveCollectionForRejection: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}