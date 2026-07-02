import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Routing' })
export class LegacyRouting {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingID' })
  routingID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartValidityDate', nullable: true })
  startValidityDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndValidityDate', nullable: true })
  endValidityDate: Date | null;

  @Column({ type: 'numeric', name: 'FromLotSize', nullable: true })
  fromLotSize: number | null;

  @Column({ type: 'numeric', name: 'ToLotSize', nullable: true })
  toLotSize: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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