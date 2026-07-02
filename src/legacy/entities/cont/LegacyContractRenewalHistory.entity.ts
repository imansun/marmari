import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractRenewalHistory' })
export class LegacyContractRenewalHistory {
  @PrimaryColumn({ type: 'bigint', name: 'ContractRenewalHistoryID' })
  contractRenewalHistoryID: number;

  @Column({ type: 'bigint', name: 'ContractRef' })
  contractRef: number;

  @Column({ type: 'timestamp without time zone', name: 'OldEndDate' })
  oldEndDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'NewEndDate', nullable: true })
  newEndDate: Date | null;

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

}