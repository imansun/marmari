import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountReviewCollectDataInfo' })
export class LegacyAccountReviewCollectDataInfo {
  @PrimaryColumn({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'ConvertDate' })
  convertDate: Date;

}