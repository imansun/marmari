import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EvalPer' })
export class LegacyEvalPer {
  @PrimaryColumn({ type: 'bigint', name: 'EvalPerID' })
  evalPerID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'PerCodeRef', nullable: true })
  perCodeRef: number | null;

  @Column({ type: 'character varying', name: 'Organ', nullable: true })
  organ: string | null;

  @Column({ type: 'numeric', name: 'Age2', nullable: true })
  age2: number | null;

  @Column({ type: 'numeric', name: 'Sar', nullable: true })
  sar: number | null;

  @Column({ type: 'numeric', name: 'Manager', nullable: true })
  manager: number | null;

  @Column({ type: 'numeric', name: 'Sar2', nullable: true })
  sar2: number | null;

  @Column({ type: 'numeric', name: 'Manager2', nullable: true })
  manager2: number | null;

  @Column({ type: 'numeric', name: 'Sar3', nullable: true })
  sar3: number | null;

  @Column({ type: 'numeric', name: 'Manager3', nullable: true })
  manager3: number | null;

  @Column({ type: 'character varying', name: 'No3Dial', nullable: true })
  no3Dial: string | null;

  @Column({ type: 'character varying', name: 'No2Dial', nullable: true })
  no2Dial: string | null;

  @Column({ type: 'character varying', name: 'No1Dial', nullable: true })
  no1Dial: string | null;

  @Column({ type: 'character varying', name: 'No4Dial', nullable: true })
  no4Dial: string | null;

  @Column({ type: 'numeric', name: 'Sar4', nullable: true })
  sar4: number | null;

  @Column({ type: 'numeric', name: 'Manager4', nullable: true })
  manager4: number | null;

  @Column({ type: 'character varying', name: 'No7Dial', nullable: true })
  no7Dial: string | null;

  @Column({ type: 'character varying', name: 'No5Dial', nullable: true })
  no5Dial: string | null;

  @Column({ type: 'character varying', name: 'No6Dial', nullable: true })
  no6Dial: string | null;

  @Column({ type: 'numeric', name: 'Sar44', nullable: true })
  sar44: number | null;

  @Column({ type: 'numeric', name: 'Sar5', nullable: true })
  sar5: number | null;

  @Column({ type: 'numeric', name: 'Sar7', nullable: true })
  sar7: number | null;

  @Column({ type: 'numeric', name: 'Manager5', nullable: true })
  manager5: number | null;

  @Column({ type: 'numeric', name: 'Manager6', nullable: true })
  manager6: number | null;

  @Column({ type: 'numeric', name: 'Manager7', nullable: true })
  manager7: number | null;

  @Column({ type: 'character varying', name: 'No8Dial', nullable: true })
  no8Dial: string | null;

  @Column({ type: 'character varying', name: 'No99Dial', nullable: true })
  no99Dial: string | null;

  @Column({ type: 'character varying', name: 'No11Dial', nullable: true })
  no11Dial: string | null;

  @Column({ type: 'character varying', name: 'No111Dial', nullable: true })
  no111Dial: string | null;

  @Column({ type: 'numeric', name: 'Sar8', nullable: true })
  sar8: number | null;

  @Column({ type: 'numeric', name: 'Manager9', nullable: true })
  manager9: number | null;

  @Column({ type: 'numeric', name: 'Sar9', nullable: true })
  sar9: number | null;

  @Column({ type: 'numeric', name: 'Manager10', nullable: true })
  manager10: number | null;

  @Column({ type: 'numeric', name: 'Sar10', nullable: true })
  sar10: number | null;

  @Column({ type: 'numeric', name: 'Manager110', nullable: true })
  manager110: number | null;

  @Column({ type: 'numeric', name: 'Sar11', nullable: true })
  sar11: number | null;

  @Column({ type: 'numeric', name: 'Manager11', nullable: true })
  manager11: number | null;

  @Column({ type: 'character varying', name: 'No112Dial', nullable: true })
  no112Dial: string | null;

  @Column({ type: 'character varying', name: 'No13Dial', nullable: true })
  no13Dial: string | null;

  @Column({ type: 'character varying', name: 'No14Dial', nullable: true })
  no14Dial: string | null;

  @Column({ type: 'character varying', name: 'No15Dial', nullable: true })
  no15Dial: string | null;

  @Column({ type: 'character varying', name: 'No16Dial', nullable: true })
  no16Dial: string | null;

  @Column({ type: 'numeric', name: 'Sar12', nullable: true })
  sar12: number | null;

  @Column({ type: 'numeric', name: 'Manager12', nullable: true })
  manager12: number | null;

  @Column({ type: 'numeric', name: 'Sar13', nullable: true })
  sar13: number | null;

  @Column({ type: 'numeric', name: 'Manager13', nullable: true })
  manager13: number | null;

  @Column({ type: 'numeric', name: 'Sar14', nullable: true })
  sar14: number | null;

  @Column({ type: 'numeric', name: 'Manager14', nullable: true })
  manager14: number | null;

  @Column({ type: 'numeric', name: 'Sar15', nullable: true })
  sar15: number | null;

  @Column({ type: 'numeric', name: 'Manager15', nullable: true })
  manager15: number | null;

  @Column({ type: 'numeric', name: 'Sar16', nullable: true })
  sar16: number | null;

  @Column({ type: 'numeric', name: 'Manager16', nullable: true })
  manager16: number | null;

  @Column({ type: 'character varying', name: 'No17Dial', nullable: true })
  no17Dial: string | null;

  @Column({ type: 'numeric', nullable: true })
  sar17: number | null;

  @Column({ type: 'character varying', name: 'No18Dial', nullable: true })
  no18Dial: string | null;

  @Column({ type: 'character varying', name: 'No19Dial', nullable: true })
  no19Dial: string | null;

  @Column({ type: 'character varying', name: 'No20Dial', nullable: true })
  no20Dial: string | null;

  @Column({ type: 'numeric', name: 'Manager17', nullable: true })
  manager17: number | null;

  @Column({ type: 'numeric', name: 'Sar18', nullable: true })
  sar18: number | null;

  @Column({ type: 'numeric', name: 'Manager18', nullable: true })
  manager18: number | null;

  @Column({ type: 'numeric', name: 'Sar19', nullable: true })
  sar19: number | null;

  @Column({ type: 'numeric', name: 'Manager19', nullable: true })
  manager19: number | null;

  @Column({ type: 'numeric', name: 'Sar20', nullable: true })
  sar20: number | null;

  @Column({ type: 'numeric', name: 'Manager20', nullable: true })
  manager20: number | null;

  @Column({ type: 'character varying', name: 'No21Dial', nullable: true })
  no21Dial: string | null;

  @Column({ type: 'character varying', name: 'No22Dial', nullable: true })
  no22Dial: string | null;

  @Column({ type: 'character varying', name: 'No23Dial', nullable: true })
  no23Dial: string | null;

  @Column({ type: 'character varying', name: 'No24Dial', nullable: true })
  no24Dial: string | null;

  @Column({ type: 'character varying', name: 'No25Dial', nullable: true })
  no25Dial: string | null;

  @Column({ type: 'numeric', name: 'Sar21', nullable: true })
  sar21: number | null;

  @Column({ type: 'numeric', name: 'Manager21', nullable: true })
  manager21: number | null;

  @Column({ type: 'numeric', name: 'Sar22', nullable: true })
  sar22: number | null;

  @Column({ type: 'numeric', name: 'Manager22', nullable: true })
  manager22: number | null;

  @Column({ type: 'numeric', name: 'Sar23', nullable: true })
  sar23: number | null;

  @Column({ type: 'numeric', name: 'Manager23', nullable: true })
  manager23: number | null;

  @Column({ type: 'numeric', name: 'Sar24', nullable: true })
  sar24: number | null;

  @Column({ type: 'numeric', name: 'Manager24', nullable: true })
  manager24: number | null;

  @Column({ type: 'numeric', name: 'Sar25', nullable: true })
  sar25: number | null;

  @Column({ type: 'numeric', name: 'Manager25', nullable: true })
  manager25: number | null;

  @Column({ type: 'boolean', name: 'GrddMiBid', nullable: true })
  grddMiBid: boolean | null;

  @Column({ type: 'boolean', name: 'MygrddBid', nullable: true })
  mygrddBid: boolean | null;

  @Column({ type: 'boolean', name: 'GrddDampBid', nullable: true })
  grddDampBid: boolean | null;

  @Column({ type: 'boolean', name: 'GrddDampBid2', nullable: true })
  grddDampBid2: boolean | null;

  @Column({ type: 'numeric', name: 'Ghar3', nullable: true })
  ghar3: number | null;

  @Column({ type: 'numeric', name: 'MonthInstrumentContinuationDuration', nullable: true })
  monthInstrumentContinuationDuration: number | null;

  @Column({ type: 'numeric', name: 'Ghar2', nullable: true })
  ghar2: number | null;

  @Column({ type: 'boolean', name: 'Pishnahad', nullable: true })
  pishnahad: boolean | null;

  @Column({ type: 'boolean', name: 'Pyshnhadnmygrdd', nullable: true })
  pyshnhadnmygrdd: boolean | null;

  @Column({ type: 'numeric', name: 'AttendantAppraisalCharterSum', nullable: true })
  attendantAppraisalCharterSum: number | null;

  @Column({ type: 'numeric', name: 'ManagerAppraisalCharterSum', nullable: true })
  managerAppraisalCharterSum: number | null;

  @Column({ type: 'timestamp without time zone', name: 'PropositionAuthenticityDate', nullable: true })
  propositionAuthenticityDate: Date | null;

  @Column({ type: 'bigint', name: 'DomesticNameAndNameRef', nullable: true })
  domesticNameAndNameRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DateEs', nullable: true })
  dateEs: Date | null;

  @Column({ type: 'character varying', name: 'Employ', nullable: true })
  employ: string | null;

  @Column({ type: 'character varying', name: 'Post', nullable: true })
  post: string | null;

  @Column({ type: 'timestamp without time zone', name: 'AppraisalDate', nullable: true })
  appraisalDate: Date | null;

  @Column({ type: 'character varying', name: 'EffusiveDateFrmt', nullable: true })
  effusiveDateFrmt: string | null;

  @Column({ type: 'character varying', name: 'YearlongEffusiveDateFrmt', nullable: true })
  yearlongEffusiveDateFrmt: string | null;

  @Column({ type: 'character varying', name: 'Sum', nullable: true })
  sum: string | null;

  @Column({ type: 'character varying', name: 'SupplementalComments', nullable: true })
  supplementalComments: string | null;

  @Column({ type: 'character varying', name: 'Trahyshdhtust', nullable: true })
  trahyshdhtust: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}