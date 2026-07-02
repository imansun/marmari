import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialProfileSubscribingModule' })
export class LegacySerialProfileSubscribingModule {
  @PrimaryColumn({ type: 'bigint', name: 'SerialProfileSubscribingModuleID' })
  serialProfileSubscribingModuleID: number;

  @Column({ type: 'bigint', name: 'SerialProfileRef' })
  serialProfileRef: number;

  @Column({ type: 'bigint', name: 'SerialSubscribingModuleRef' })
  serialSubscribingModuleRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}