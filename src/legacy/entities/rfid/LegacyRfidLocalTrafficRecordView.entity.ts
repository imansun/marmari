import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalTrafficRecordView' })
export class LegacyRfidLocalTrafficRecordView {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalTrafficRecordViewID' })
  rfidLocalTrafficRecordViewID: number;

  @Column({ type: 'integer', name: 'CardEventStatusCode' })
  cardEventStatusCode: number;

  @Column({ type: 'integer', name: 'BackColor', nullable: true })
  backColor: number | null;

  @Column({ type: 'integer', name: 'ForeColor', nullable: true })
  foreColor: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}