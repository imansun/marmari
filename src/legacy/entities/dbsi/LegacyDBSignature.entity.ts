import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DBSignature' })
export class LegacyDBSignature {
  @PrimaryColumn({ type: 'bytea', name: 'Signature' })
  signature: Buffer;

  @PrimaryColumn({ type: 'boolean', name: 'SignedByDevModeInstaller' })
  signedByDevModeInstaller: boolean;

}