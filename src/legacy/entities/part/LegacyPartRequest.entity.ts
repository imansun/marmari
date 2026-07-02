import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartRequest' })
export class LegacyPartRequest {
  @PrimaryColumn({ type: 'bigint', name: 'PartRequestID' })
  partRequestID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'RequestFromPartyRef' })
  requestFromPartyRef: number;

  @Column({ type: 'timestamp without time zone', name: 'DateOfNeed' })
  dateOfNeed: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'RequestType' })
  requestType: number;

  @Column({ type: 'bigint', name: 'SenderStoreRef', nullable: true })
  senderStoreRef: number | null;

  @Column({ type: 'bigint', name: 'SenderPlantRef', nullable: true })
  senderPlantRef: number | null;

  @Column({ type: 'bigint', name: 'ReceiverStoreRef', nullable: true })
  receiverStoreRef: number | null;

  @Column({ type: 'bigint', name: 'ReceiverPlantRef', nullable: true })
  receiverPlantRef: number | null;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'CounterpartEntityCode', nullable: true })
  counterpartEntityCode: number | null;

  @Column({ type: 'bigint', name: 'CounterpartEntityRef', nullable: true })
  counterpartEntityRef: number | null;

  @Column({ type: 'character varying', name: 'CounterpartEntityText', nullable: true })
  counterpartEntityText: string | null;

  @Column({ type: 'integer', name: 'ReserveState', nullable: true })
  reserveState: number | null;

  @Column({ type: 'boolean', name: 'HasShippingOrder' })
  hasShippingOrder: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'integer', name: 'PrevState', nullable: true })
  prevState: number | null;

  @Column({ type: 'character varying', name: 'Level5DLCode', nullable: true })
  level5DLCode: string | null;

  @Column({ type: 'character varying', name: 'Level6DLCode', nullable: true })
  level6DLCode: string | null;

  @Column({ type: 'character varying', name: 'Level5DLTitle', nullable: true })
  level5DLTitle: string | null;

  @Column({ type: 'character varying', name: 'Level6DLTitle', nullable: true })
  level6DLTitle: string | null;

  @Column({ type: 'bigint', name: 'Level5DLRef', nullable: true })
  level5DLRef: number | null;

  @Column({ type: 'bigint', name: 'Level6DLRef', nullable: true })
  level6DLRef: number | null;

}