import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ECEEmailTransceiver' })
export class LegacyECEEmailTransceiver {
  @PrimaryColumn({ type: 'bigint', name: 'ECEEmailTransceiverID' })
  eCEEmailTransceiverID: number;

  @Column({ type: 'bigint', name: 'ECEEmailRef' })
  eCEEmailRef: number;

  @Column({ type: 'bigint', name: 'ECEParticipantMapRef' })
  eCEParticipantMapRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}