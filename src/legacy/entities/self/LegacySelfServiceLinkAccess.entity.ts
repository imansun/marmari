import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceLinkAccess' })
export class LegacySelfServiceLinkAccess {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceLinkAccessID' })
  selfServiceLinkAccessID: number;

  @Column({ type: 'bigint', name: 'ActorRef' })
  actorRef: number;

  @Column({ type: 'integer', name: 'ActorTypeCode' })
  actorTypeCode: number;

  @Column({ type: 'boolean', name: 'RevertToParent' })
  revertToParent: boolean;

  @Column({ type: 'boolean', name: 'ChangeAddress' })
  changeAddress: boolean;

  @Column({ type: 'boolean', name: 'EmployeeInfoChangeRequest' })
  employeeInfoChangeRequest: boolean;

  @Column({ type: 'boolean', name: 'EmployeeStatute' })
  employeeStatute: boolean;

  @Column({ type: 'boolean', name: 'LeaveRequest' })
  leaveRequest: boolean;

  @Column({ type: 'boolean', name: 'LeaveCardex' })
  leaveCardex: boolean;

  @Column({ type: 'boolean', name: 'MissionDocument' })
  missionDocument: boolean;

  @Column({ type: 'boolean', name: 'AttendanceDataCorrectionRequest' })
  attendanceDataCorrectionRequest: boolean;

  @Column({ type: 'boolean', name: 'AttendancePermissionRequest' })
  attendancePermissionRequest: boolean;

  @Column({ type: 'boolean', name: 'AttendancePermission' })
  attendancePermission: boolean;

  @Column({ type: 'boolean', name: 'WorkingGroupChangeRequest' })
  workingGroupChangeRequest: boolean;

  @Column({ type: 'boolean', name: 'AttendanceStatus' })
  attendanceStatus: boolean;

  @Column({ type: 'boolean', name: 'ReviewAttendanceCalc' })
  reviewAttendanceCalc: boolean;

  @Column({ type: 'boolean', name: 'SalaryReceipt' })
  salaryReceipt: boolean;

  @Column({ type: 'boolean', name: 'PeriodicCalcReceipt' })
  periodicCalcReceipt: boolean;

  @Column({ type: 'boolean', name: 'UserDefinedCalcReceipt' })
  userDefinedCalcReceipt: boolean;

  @Column({ type: 'boolean', name: 'ReviewCompensation' })
  reviewCompensation: boolean;

  @Column({ type: 'boolean', name: 'CourseRequest' })
  courseRequest: boolean;

  @Column({ type: 'boolean', name: 'TrainingRecords' })
  trainingRecords: boolean;

  @Column({ type: 'boolean', name: 'DailyCalc' })
  dailyCalc: boolean;

  @Column({ type: 'boolean', name: 'ReportExplorer' })
  reportExplorer: boolean;

  @Column({ type: 'boolean', name: 'AppraisalForm' })
  appraisalForm: boolean;

  @Column({ type: 'boolean', name: 'EmployeeAppraisalWorkbookReport' })
  employeeAppraisalWorkbookReport: boolean;

  @Column({ type: 'boolean', name: 'TrainingAppraisalForm' })
  trainingAppraisalForm: boolean;

  @Column({ type: 'boolean', name: 'ManagerBatchOperation' })
  managerBatchOperation: boolean;

  @Column({ type: 'boolean', name: 'ManagerEmployeeInfoChangeRequest' })
  managerEmployeeInfoChangeRequest: boolean;

  @Column({ type: 'boolean', name: 'ManagerEmployeeStatute' })
  managerEmployeeStatute: boolean;

  @Column({ type: 'boolean', name: 'ManagerLeaveRequest' })
  managerLeaveRequest: boolean;

  @Column({ type: 'boolean', name: 'ManagerLeaveCardex' })
  managerLeaveCardex: boolean;

  @Column({ type: 'boolean', name: 'ManagerMissionDocument' })
  managerMissionDocument: boolean;

  @Column({ type: 'boolean', name: 'ManagerAttendanceDataCorrectionRequest' })
  managerAttendanceDataCorrectionRequest: boolean;

  @Column({ type: 'boolean', name: 'ManagerAttendancePermissionRequest' })
  managerAttendancePermissionRequest: boolean;

  @Column({ type: 'boolean', name: 'BatchAttendancePermission' })
  batchAttendancePermission: boolean;

  @Column({ type: 'boolean', name: 'ManagerAttendancePermission' })
  managerAttendancePermission: boolean;

  @Column({ type: 'boolean', name: 'ManagerWorkingGroupChangeRequest' })
  managerWorkingGroupChangeRequest: boolean;

  @Column({ type: 'boolean', name: 'ManagerAttendanceStatus' })
  managerAttendanceStatus: boolean;

  @Column({ type: 'boolean', name: 'ManagerReviewAttendanceCalc' })
  managerReviewAttendanceCalc: boolean;

  @Column({ type: 'boolean', name: 'ManagerSalaryReceipt' })
  managerSalaryReceipt: boolean;

  @Column({ type: 'boolean', name: 'ManagerPeriodicCalcReceipt' })
  managerPeriodicCalcReceipt: boolean;

  @Column({ type: 'boolean', name: 'ManagerUserDefinedCalcReceipt' })
  managerUserDefinedCalcReceipt: boolean;

  @Column({ type: 'boolean', name: 'ManagerReviewCompensation' })
  managerReviewCompensation: boolean;

  @Column({ type: 'boolean', name: 'ManagerCourseRequest' })
  managerCourseRequest: boolean;

  @Column({ type: 'boolean', name: 'ManagerTrainingRecords' })
  managerTrainingRecords: boolean;

  @Column({ type: 'boolean', name: 'ManagerEmployeeAppraisalWorkbookReport' })
  managerEmployeeAppraisalWorkbookReport: boolean;

  @Column({ type: 'boolean', name: 'ManagerAppraisalForm' })
  managerAppraisalForm: boolean;

  @Column({ type: 'boolean', name: 'ManagerTrainingAppraisalForm' })
  managerTrainingAppraisalForm: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'boolean', name: 'ManagerBatchAttendanceStatus', default: false })
  managerBatchAttendanceStatus: boolean;

  @Column({ type: 'boolean', name: 'WorkingGroupOrganizing', default: false })
  workingGroupOrganizing: boolean;

  @Column({ type: 'boolean', name: 'WorkingGroupOrganizingHistory', default: false })
  workingGroupOrganizingHistory: boolean;

  @Column({ type: 'boolean', name: 'AttendanceEventsList', default: false })
  attendanceEventsList: boolean;

  @Column({ type: 'boolean', name: 'DailyAttendanceDataManagement', default: false })
  dailyAttendanceDataManagement: boolean;

  @Column({ type: 'boolean', name: 'DailyAttendanceDataCalculation', default: false })
  dailyAttendanceDataCalculation: boolean;

  @Column({ type: 'boolean', name: 'ManagerWorkingGroupOrganizing', default: false })
  managerWorkingGroupOrganizing: boolean;

  @Column({ type: 'boolean', name: 'ManagerWorkingGroupOrganizingHistory', default: false })
  managerWorkingGroupOrganizingHistory: boolean;

  @Column({ type: 'boolean', name: 'ManagerDailyAttendanceDataManagement', default: false })
  managerDailyAttendanceDataManagement: boolean;

  @Column({ type: 'boolean', name: 'ManagerDailyAttendanceDataCalculation', default: false })
  managerDailyAttendanceDataCalculation: boolean;

  @Column({ type: 'boolean', name: 'PerformanceAgreement', default: false })
  performanceAgreement: boolean;

  @Column({ type: 'boolean', name: 'AppraisalQuestionnaire', default: false })
  appraisalQuestionnaire: boolean;

  @Column({ type: 'boolean', name: 'MyPerformanceProfile', default: false })
  myPerformanceProfile: boolean;

  @Column({ type: 'boolean', name: 'MyAppraisalQuestionaire', default: false })
  myAppraisalQuestionaire: boolean;

  @Column({ type: 'boolean', name: 'ManagerPerformanceDashboard', default: false })
  managerPerformanceDashboard: boolean;

  @Column({ type: 'boolean', name: 'ManagerPerformanceAgreement', default: false })
  managerPerformanceAgreement: boolean;

  @Column({ type: 'boolean', name: 'ManagerAppraisalReview', default: false })
  managerAppraisalReview: boolean;

  @Column({ type: 'boolean', name: 'ManagerAppraisalQuestionnaire', default: false })
  managerAppraisalQuestionnaire: boolean;

  @Column({ type: 'boolean', name: 'ManagerViewAppraisalQuestionnaire', default: false })
  managerViewAppraisalQuestionnaire: boolean;

}