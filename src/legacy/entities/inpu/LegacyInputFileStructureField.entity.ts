import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InputFileStructureField' })
export class LegacyInputFileStructureField {
  @PrimaryColumn({ type: 'bigint', name: 'InputFileStructureFieldID' })
  inputFileStructureFieldID: number;

  @Column({ type: 'bigint', name: 'InputFileStructureRef' })
  inputFileStructureRef: number;

  @Column({ type: 'bigint', name: 'Key' })
  key: number;

  @Column({ type: 'integer', name: 'KeyColumnIndex', nullable: true })
  keyColumnIndex: number | null;

  @Column({ type: 'integer', name: 'KeyStartColumnIndex', nullable: true })
  keyStartColumnIndex: number | null;

  @Column({ type: 'integer', name: 'KeyColumnLength', nullable: true })
  keyColumnLength: number | null;

  @Column({ type: 'integer', name: 'DayColumnLength', nullable: true })
  dayColumnLength: number | null;

  @Column({ type: 'integer', name: 'HourColumnLength', nullable: true })
  hourColumnLength: number | null;

  @Column({ type: 'integer', name: 'MinuteColumnLength', nullable: true })
  minuteColumnLength: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}