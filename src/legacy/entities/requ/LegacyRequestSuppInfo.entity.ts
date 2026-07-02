import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RequestSuppInfo' })
export class LegacyRequestSuppInfo {
  @PrimaryColumn({ type: 'bigint', name: 'RequestSuppInfoID' })
  requestSuppInfoID: number;

  @Column({ type: 'bigint', name: 'GoodsRequestNoRef', nullable: true })
  goodsRequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'RequestConsumpSlot', nullable: true })
  requestConsumpSlot: string | null;

  @Column({ type: 'integer', name: 'RequestCogency', nullable: true })
  requestCogency: number | null;

  @Column({ type: 'character varying', name: 'CogencyComments', nullable: true })
  cogencyComments: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'ContractorRequestNoRef', nullable: true })
  contractorRequestNoRef: number | null;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

}