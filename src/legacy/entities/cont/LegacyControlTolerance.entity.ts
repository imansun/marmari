import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ControlTolerance' })
export class LegacyControlTolerance {
  @PrimaryColumn({ type: 'bigint', name: 'ControlToleranceID' })
  controlToleranceID: number;

  @Column({ type: 'bigint', name: 'AmountControlDefinitionRef' })
  amountControlDefinitionRef: number;

  @Column({ type: 'smallint', name: 'TolerancePercentage' })
  tolerancePercentage: number;

  @Column({ type: 'bigint', name: 'SourceRef' })
  sourceRef: number;

  @Column({ type: 'bigint', name: 'TargetRef' })
  targetRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'DLRef1', nullable: true })
  dLRef1: number | null;

  @Column({ type: 'bigint', name: 'DLRef2', nullable: true })
  dLRef2: number | null;

  @Column({ type: 'bigint', name: 'DLRef3', nullable: true })
  dLRef3: number | null;

  @Column({ type: 'bigint', name: 'DLRef4', nullable: true })
  dLRef4: number | null;

  @Column({ type: 'bigint', name: 'DLRef5', nullable: true })
  dLRef5: number | null;

  @Column({ type: 'bigint', name: 'DLRef6', nullable: true })
  dLRef6: number | null;

  @Column({ type: 'bigint', name: 'DLRef7', nullable: true })
  dLRef7: number | null;

  @Column({ type: 'bigint', name: 'DLRef8', nullable: true })
  dLRef8: number | null;

  @Column({ type: 'bigint', name: 'DLRef9', nullable: true })
  dLRef9: number | null;

  @Column({ type: 'bigint', name: 'DLRef10', nullable: true })
  dLRef10: number | null;

  @Column({ type: 'bigint', name: 'DLRef11', nullable: true })
  dLRef11: number | null;

  @Column({ type: 'bigint', name: 'DLRef12', nullable: true })
  dLRef12: number | null;

  @Column({ type: 'bigint', name: 'DLRef13', nullable: true })
  dLRef13: number | null;

  @Column({ type: 'bigint', name: 'DLRef14', nullable: true })
  dLRef14: number | null;

  @Column({ type: 'bigint', name: 'DLRef15', nullable: true })
  dLRef15: number | null;

  @Column({ type: 'bigint', name: 'DLRef16', nullable: true })
  dLRef16: number | null;

  @Column({ type: 'bigint', name: 'DLRef17', nullable: true })
  dLRef17: number | null;

}