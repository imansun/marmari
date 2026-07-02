import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MRP2Prod' })
export class LegacyMRP2Prod {
  @PrimaryColumn({ type: 'bigint', name: 'MRP2ProdID' })
  mRP2ProdID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'ProductionBehestNo' })
  productionBehestNo: string;

  @Column({ type: 'timestamp without time zone', name: 'ProductionBehestDate', nullable: true })
  productionBehestDate: Date | null;

  @Column({ type: 'character varying', name: 'ProductionBehestComments', nullable: true })
  productionBehestComments: string | null;

  @Column({ type: 'character varying', name: 'SupplementalComments', nullable: true })
  supplementalComments: string | null;

  @Column({ type: 'character varying', name: 'PerIsDesigning', nullable: true })
  perIsDesigning: string | null;

  @Column({ type: 'integer', name: 'TractCode', nullable: true })
  tractCode: number | null;

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