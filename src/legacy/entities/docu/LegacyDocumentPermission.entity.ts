import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DocumentPermission' })
export class LegacyDocumentPermission {
  @PrimaryColumn({ type: 'bigint', name: 'DocumentPermissionID' })
  documentPermissionID: number;

  @Column({ type: 'boolean', name: 'GrantRead', nullable: true })
  grantRead: boolean | null;

  @Column({ type: 'boolean', name: 'GrantWrite', nullable: true })
  grantWrite: boolean | null;

  @Column({ type: 'boolean', name: 'GrantDelete', nullable: true })
  grantDelete: boolean | null;

  @Column({ type: 'boolean', name: 'DenyRead', nullable: true })
  denyRead: boolean | null;

  @Column({ type: 'boolean', name: 'DenyWrite', nullable: true })
  denyWrite: boolean | null;

  @Column({ type: 'boolean', name: 'DenyDelete', nullable: true })
  denyDelete: boolean | null;

  @Column({ type: 'bigint', name: 'DocumentRef', nullable: true })
  documentRef: number | null;

  @Column({ type: 'bigint', name: 'OrganizerRef', nullable: true })
  organizerRef: number | null;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}