import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WebViewState' })
export class LegacyWebViewState {
  @PrimaryColumn({ type: 'bigint', name: 'WebViewStateID' })
  webViewStateID: number;

  @Column({ type: 'bigint', name: 'WebSessionRef' })
  webSessionRef: number;

  @Column({ type: 'bytea', name: 'ViewState', nullable: true })
  viewState: Buffer | null;

  @Column({ type: 'bytea', name: 'ControlState', nullable: true })
  controlState: Buffer | null;

}