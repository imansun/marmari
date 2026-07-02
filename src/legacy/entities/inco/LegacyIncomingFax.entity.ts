import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IncomingFax' })
export class LegacyIncomingFax {
  @PrimaryColumn({ type: 'bigint', name: 'IncomingFaxID' })
  incomingFaxID: number;

  @Column({ type: 'character varying', name: 'CallerID', nullable: true })
  callerID: string | null;

  @Column({ type: 'character varying', name: 'CSID', nullable: true })
  cSID: string | null;

  @Column({ type: 'timestamp without time zone', name: 'TransmissionStart' })
  transmissionStart: Date;

  @Column({ type: 'timestamp without time zone', name: 'TransmissionEnd' })
  transmissionEnd: Date;

  @Column({ type: 'bigint', name: 'FaxDocumentRef' })
  faxDocumentRef: number;

  @Column({ type: 'bigint', name: 'FaxFolderRef' })
  faxFolderRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ViewDate', nullable: true })
  viewDate: Date | null;

  @Column({ type: 'integer', name: 'State', default: 0 })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}