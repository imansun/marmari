import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CorrespondentGroupMember' })
export class LegacyCorrespondentGroupMember {
  @PrimaryColumn({ type: 'bigint', name: 'CorrespondentGroupMemberID' })
  correspondentGroupMemberID: number;

  @Column({ type: 'bigint', name: 'ParentRef' })
  parentRef: number;

  @Column({ type: 'bigint', name: 'CorrespondentGroupRef', nullable: true })
  correspondentGroupRef: number | null;

  @Column({ type: 'bigint', name: 'CorrespondentRef', nullable: true })
  correspondentRef: number | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

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