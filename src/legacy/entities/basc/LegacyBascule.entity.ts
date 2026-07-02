import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Bascule' })
export class LegacyBascule {
  @PrimaryColumn({ type: 'bigint', name: 'BasculeID' })
  basculeID: number;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

  @Column({ type: 'integer', name: 'DeviceModel' })
  deviceModel: number;

  @Column({ type: 'character varying', name: 'WorkstationName' })
  workstationName: string;

  @Column({ type: 'integer', name: 'ComPort' })
  comPort: number;

  @Column({ type: 'integer', name: 'BaudRate' })
  baudRate: number;

  @Column({ type: 'integer', name: 'DataBits' })
  dataBits: number;

  @Column({ type: 'integer', name: 'Parity' })
  parity: number;

  @Column({ type: 'integer', name: 'StopBits' })
  stopBits: number;

  @Column({ type: 'smallint', name: 'PrecisionNo' })
  precisionNo: number;

  @Column({ type: 'integer', name: 'StabilityTime' })
  stabilityTime: number;

  @Column({ type: 'boolean', name: 'AutoFill' })
  autoFill: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'WorkstationIP', nullable: true })
  workstationIP: string | null;

}