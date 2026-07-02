import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StatuteTypeFactor' })
export class LegacyStatuteTypeFactor {
  @PrimaryColumn({ type: 'bigint', name: 'StatuteTypeFactorID' })
  statuteTypeFactorID: number;

  @Column({ type: 'bigint', name: 'StatuteTypeRef' })
  statuteTypeRef: number;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef' })
  employmentTypeRef: number;

  @Column({ type: 'bigint', name: 'StatuteFactorRef' })
  statuteFactorRef: number;

  @Column({ type: 'boolean', name: 'Editable' })
  editable: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}