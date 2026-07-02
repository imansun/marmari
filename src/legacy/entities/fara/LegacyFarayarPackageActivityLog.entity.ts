import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FarayarPackageActivityLog' })
export class LegacyFarayarPackageActivityLog {
  @PrimaryColumn({ type: 'bigint', name: 'FarayarPackageActivityLogID' })
  farayarPackageActivityLogID: number;

  @Column({ type: 'bigint', name: 'FarayarPackageRef' })
  farayarPackageRef: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'character varying', name: 'ServerName', nullable: true })
  serverName: string | null;

  @Column({ type: 'timestamp without time zone', name: 'DateTime' })
  dateTime: Date;

  @Column({ type: 'integer', name: 'Action' })
  action: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}