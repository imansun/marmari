import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MhsulatLicking2' })
export class LegacyMhsulatLicking2 {
  @PrimaryColumn({ type: 'bigint', name: 'MhsulatLicking2ID' })
  mhsulatLicking2ID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'ProductCodeRef', nullable: true })
  productCodeRef: number | null;

  @Column({ type: 'numeric', name: 'ItemAllQuantity', nullable: true })
  itemAllQuantity: number | null;

  @Column({ type: 'character varying', name: 'ProductName', nullable: true })
  productName: string | null;

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

}