import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity';

export interface SalaryDetails {
  refNo: string;
  id: number;
  employee: string;
  currency: string;
  date: Date;
  basic: number;
  housing: number;
  transport: number;
  hazard: number;
  inconvenience: number;
  utility: number;
  lunch: number;
  bonus: number;
  leave: number;
  call: number;
  arrears: number;
  addedResponsibility: number;
  compound: number;
  extraDuty: number;
  overtime: number;
  sundayOvertime: number;
  publicHolidayOvertime: number;
  medicalAllowance: number;
  otherAllowance: number;
  repatriationAllowance: number;
  terminalBenefit: number;
  maternityLeave: number;
  allowance: number;
  grossSalary: number;
  tax: number;
  pensionsVoluntary: number;
  pensionsEmployee: number;
  pensionEmployer: number;
  housingNHF: number;
  absent: number;
  salaryAdvance: number;
  nmaDeduction: number;
  cooperative: number;
  medicalBill: number;
  loan: number;
  disciplinaryDeduction: number;
  otherDeduction: number;
  noOfDaysInMonth: number;
  noOfWorkingDays: number;
  noOfDaysOnLeave: number;
  overtimeDays: number;
  noOfDaysAbsent: number;
  normalHours: number;
  sundayHours: number;
  phHours: number;
  maternityLeaveDays: number;
  casualLeaveDays: number;
  unpaidDays: number;
  suspensionDays: number;
  unionDue: number;
  itfContribution: number;
  status: string;
  nsitfContribution: number;
  totalDeduction: number;
  createdBy: string;
  creationDate: Date;
  modifiedBy: string;
  modificationDate: Date;
}

@Entity()
export class SalaryDetailsEntity extends BaseEntity implements SalaryDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  refNo: string;

  @Column()
  @IsNotEmpty()
  employee: string;

  @Column()
  @IsNotEmpty()
  currency: string;

  @Column()
  @IsNotEmpty()
  date: Date;

  @Column()
  @IsNotEmpty()
  basic: number;

  @Column()
  @IsNotEmpty()
  housing: number;

  @Column()
  @IsNotEmpty()
  transport: number;

  @Column()
  @IsNotEmpty()
  hazard: number;

  @Column()
  @IsNotEmpty()
  inconvenience: number;

  @Column()
  @IsNotEmpty()
  utility: number;

  @Column()
  @IsNotEmpty()
  lunch: number;

  @Column()
  @IsNotEmpty()
  bonus: number;

  @Column()
  @IsNotEmpty()
  leave: number;

  @Column()
  @IsNotEmpty()
  call: number;

  @Column()
  @IsNotEmpty()
  arrears: number;

  @Column()
  @IsNotEmpty()
  addedResponsibility: number;

  @Column()
  @IsNotEmpty()
  compound: number;

  @Column()
  @IsNotEmpty()
  extraDuty: number;

  @Column()
  @IsNotEmpty()
  overtime: number;

  @Column()
  @IsNotEmpty()
  sundayOvertime: number;

  @Column()
  @IsNotEmpty()
  publicHolidayOvertime: number;

  @Column()
  @IsNotEmpty()
  medicalAllowance: number;

  @Column()
  @IsNotEmpty()
  otherAllowance: number;

  @Column()
  @IsNotEmpty()
  repatriationAllowance: number;

  @Column()
  @IsNotEmpty()
  terminalBenefit: number;

  @Column()
  @IsNotEmpty()
  maternityLeave: number;

  @Column()
  @IsNotEmpty()
  allowance: number;

  @Column()
  @IsNotEmpty()
  grossSalary: number;

  @Column()
  @IsNotEmpty()
  tax: number;

  @Column()
  @IsNotEmpty()
  pensionsVoluntary: number;

  @Column()
  @IsNotEmpty()
  pensionsEmployee: number;

  @Column()
  @IsNotEmpty()
  pensionEmployer: number;

  @Column()
  @IsNotEmpty()
  housingNHF: number;

  @Column()
  @IsNotEmpty()
  absent: number;

  @Column()
  @IsNotEmpty()
  salaryAdvance: number;

  @Column()
  @IsNotEmpty()
  nmaDeduction: number;

  @Column()
  @IsNotEmpty()
  cooperative: number;

  @Column()
  @IsNotEmpty()
  medicalBill: number;

  @Column()
  @IsNotEmpty()
  loan: number;

  @Column()
  @IsNotEmpty()
  disciplinaryDeduction: number;

  @Column()
  @IsNotEmpty()
  otherDeduction: number;

  @Column()
  @IsNotEmpty()
  noOfDaysInMonth: number;

  @Column()
  @IsNotEmpty()
  noOfWorkingDays: number;

  @Column()
  @IsNotEmpty()
  noOfDaysOnLeave: number;

  @Column()
  @IsNotEmpty()
  overtimeDays: number;

  @Column()
  @IsNotEmpty()
  noOfDaysAbsent: number;

  @Column()
  @IsNotEmpty()
  normalHours: number;

  @Column()
  @IsNotEmpty()
  sundayHours: number;

  @Column()
  @IsNotEmpty()
  phHours: number;

  @Column()
  @IsNotEmpty()
  maternityLeaveDays: number;

  @Column()
  @IsNotEmpty()
  casualLeaveDays: number;

  @Column()
  @IsNotEmpty()
  unpaidDays: number;

  @Column()
  @IsNotEmpty()
  suspensionDays: number;

  @Column()
  @IsNotEmpty()
  unionDue: number;

  @Column()
  @IsNotEmpty()
  itfContribution: number;

  @Column()
  @IsNotEmpty()
  status: string;

  @Column()
  @IsNotEmpty()
  nsitfContribution: number;

  @Column()
  @IsNotEmpty()
  totalDeduction: number;

  @Column()
  @IsNotEmpty()
  createdBy: string;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  @IsNotEmpty()
  modifiedBy: string;

  @UpdateDateColumn()
  modificationDate: Date;

  @ManyToOne(() => OfficerBioDataEntity, officer => officer.salaryDetails)
  officer: OfficerBioDataEntity;
}
