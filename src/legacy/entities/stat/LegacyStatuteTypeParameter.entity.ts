import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StatuteTypeParameter' })
export class LegacyStatuteTypeParameter {
  @PrimaryColumn({ type: 'bigint', name: 'StatuteTypeParameterID' })
  statuteTypeParameterID: number;

  @Column({ type: 'bigint', name: 'StatuteTypeRef' })
  statuteTypeRef: number;

  @Column({ type: 'integer', name: 'TypeCode' })
  typeCode: number;

  @Column({ type: 'boolean', name: 'Editable' })
  editable: boolean;

  @Column({ type: 'integer', name: 'SetMethodCode' })
  setMethodCode: number;

  @Column({ type: 'boolean', name: 'Required' })
  required: boolean;

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