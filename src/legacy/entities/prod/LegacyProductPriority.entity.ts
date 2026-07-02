import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductPriority' })
export class LegacyProductPriority {
  @PrimaryColumn({ type: 'bigint', name: 'ProductPriorityID' })
  productPriorityID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'ApplyForOrders' })
  applyForOrders: boolean;

  @Column({ type: 'boolean', name: 'ApplyForSales' })
  applyForSales: boolean;

  @Column({ type: 'integer', name: 'Method' })
  method: number;

  @Column({ type: 'integer', name: 'SortOrder' })
  sortOrder: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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