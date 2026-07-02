import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartRequestReserveRel' })
export class LegacyPartRequestReserveRel {
  @PrimaryColumn({ type: 'bigint', name: 'PartRequestReserveRelID' })
  partRequestReserveRelID: number;

  @Column({ type: 'bigint', name: 'ReserveRef', nullable: true })
  reserveRef: number | null;

  @Column({ type: 'bigint', name: 'PartRequestRef', nullable: true })
  partRequestRef: number | null;

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