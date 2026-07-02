import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailInteriorSection' })
export class LegacyRetailInteriorSection {
  @PrimaryColumn({ type: 'bigint', name: 'RetailInteriorSectionID' })
  retailInteriorSectionID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'InteriorSectionType' })
  interiorSectionType: number;

  @Column({ type: 'boolean', name: 'HasCashRegister' })
  hasCashRegister: boolean;

  @Column({ type: 'boolean', name: 'HasInventoryControl', nullable: true })
  hasInventoryControl: boolean | null;

  @Column({ type: 'boolean', name: 'ApplicableForAllRetailShops' })
  applicableForAllRetailShops: boolean;

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

  @Column({ type: 'boolean', name: 'ShareRetailDocuments', default: false })
  shareRetailDocuments: boolean;

}