import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodeTemplate' })
export class LegacyCodeTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'CodeTemplateID' })
  codeTemplateID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'CodeTemplateString' })
  codeTemplateString: string;

  @Column({ type: 'integer', name: 'SerialInitValue' })
  serialInitValue: number;

  @Column({ type: 'bigint', name: 'SerialEndValue' })
  serialEndValue: number;

  @Column({ type: 'integer', name: 'SerialIncrementStep' })
  serialIncrementStep: number;

  @Column({ type: 'bigint', name: 'LastSerialNumber', nullable: true })
  lastSerialNumber: number | null;

  @Column({ type: 'character varying', name: 'LastPartCode', nullable: true })
  lastPartCode: string | null;

  @Column({ type: 'bigint', name: 'SerialLength', nullable: true })
  serialLength: number | null;

  @Column({ type: 'integer', name: 'CounterType', nullable: true })
  counterType: number | null;

  @Column({ type: 'boolean', name: 'AddToPartGroupMember' })
  addToPartGroupMember: boolean;

}