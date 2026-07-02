import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UserEntityAction' })
export class LegacyUserEntityAction {
  @PrimaryColumn({ type: 'bigint', name: 'UserEntityActionID' })
  userEntityActionID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'VersionNumber' })
  versionNumber: number;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'integer', name: 'ViewType' })
  viewType: number;

  @Column({ type: 'character varying', name: 'EntityName' })
  entityName: string;

  @Column({ type: 'character varying', name: 'ComponentName' })
  componentName: string;

  @Column({ type: 'character varying', name: 'Icon', nullable: true })
  icon: string | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

  @Column({ type: 'boolean', name: 'ShouldAskForConfirmation' })
  shouldAskForConfirmation: boolean;

  @Column({ type: 'character varying', name: 'ConfirmationMessage', nullable: true })
  confirmationMessage: string | null;

}