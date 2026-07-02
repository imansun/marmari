import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceProduct' })
export class LegacySelfServiceProduct {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceProductID' })
  selfServiceProductID: number;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'bigint', name: 'ProductGroupRef', nullable: true })
  productGroupRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}