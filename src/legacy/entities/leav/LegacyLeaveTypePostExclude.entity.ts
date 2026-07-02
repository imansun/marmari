import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LeaveTypePostExclude' })
export class LegacyLeaveTypePostExclude {
  @PrimaryColumn({ type: 'bigint', name: 'LeaveTypePostExcludeID' })
  leaveTypePostExcludeID: number;

  @Column({ type: 'bigint', name: 'LeaveTypeRef' })
  leaveTypeRef: number;

  @Column({ type: 'bigint', name: 'PostRef' })
  postRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}