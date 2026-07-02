import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalLogicalResource' })
export class LegacyRfidLocalLogicalResource {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalLogicalResourceID' })
  rfidLocalLogicalResourceID: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}