import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlineBankAccountOwner' })
export class LegacyOnlineBankAccountOwner {
  @PrimaryColumn({ type: 'bigint', name: 'OnlineBankAccountOwnerID' })
  onlineBankAccountOwnerID: number;

  @Column({ type: 'bigint', name: 'OnlineBankAccountRef' })
  onlineBankAccountRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'LastName', nullable: true })
  lastName: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}