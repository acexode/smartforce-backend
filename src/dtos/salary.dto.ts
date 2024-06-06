import { IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CreateSalaryDetailsDto {
  @IsString()
  @IsNotEmpty()
  public refNo: string;

  @IsString()
  @IsNotEmpty()
  public employee: string;

  @IsString()
  @IsNotEmpty()
  public currency: string;

  @IsDateString()
  public date: Date;

  @IsNumber()
  @IsNotEmpty()
  public basic: number;

  @IsNumber()
  @IsNotEmpty()
  public housing: number;

  @IsNumber()
  @IsNotEmpty()
  public transport: number;

  @IsNumber()
  @IsNotEmpty()
  public hazard: number;

  @IsNumber()
  @IsNotEmpty()
  public inconvenience: number;

  @IsNumber()
  @IsNotEmpty()
  public utility: number;

  @IsNumber()
  @IsNotEmpty()
  public lunch: number;

  @IsNumber()
  @IsNotEmpty()
  public bonus: number;

  @IsNumber()
  @IsNotEmpty()
  public leave: number;

  @IsNumber()
  @IsNotEmpty()
  public call: number;

  @IsNumber()
  @IsNotEmpty()
  public arrears: number;

  @IsNumber()
  @IsNotEmpty()
  public addedResponsibility: number;

  @IsNumber()
  @IsNotEmpty()
  public compound: number;

  @IsNumber()
  @IsNotEmpty()
  public extraDuty: number;

  @IsNumber()
  @IsNotEmpty()
  public overtime: number;

  @IsNumber()
  @IsNotEmpty()
  public sundayOvertime: number;

  @IsNumber()
  @IsNotEmpty()
  public publicHolidayOvertime: number;

  @IsNumber()
  @IsNotEmpty()
  public medicalAllowance: number;

  @IsNumber()
  @IsNotEmpty()
  public otherAllowance: number;

  @IsNumber()
  @IsNotEmpty()
  public repatriationAllowance: number;

  @IsNumber()
  @IsNotEmpty()
  public terminalBenefit: number;

  @IsNumber()
  @IsNotEmpty()
  public maternityLeave: number;

  @IsNumber()
  @IsNotEmpty()
  public allowance: number;

  @IsNumber()
  @IsNotEmpty()
  public grossSalary: number;

  @IsNumber()
  @IsNotEmpty()
  public tax: number;

  @IsNumber()
  @IsNotEmpty()
  public pensionsVoluntary: number;

  @IsNumber()
  @IsNotEmpty()
  public pensionsEmployee: number;

  @IsNumber()
  @IsNotEmpty()
  public pensionEmployer: number;

  @IsNumber()
  @IsNotEmpty()
  public housingNHF: number;

  @IsNumber()
  @IsNotEmpty()
  public absent: number;

  @IsNumber()
  @IsNotEmpty()
  public salaryAdvance: number;

  @IsNumber()
  @IsNotEmpty()
  public nmaDeduction: number;

  @IsNumber()
  @IsNotEmpty()
  public cooperative: number;

  @IsNumber()
  @IsNotEmpty()
  public medicalBill: number;

  @IsNumber()
  @IsNotEmpty()
  public loan: number;

  @IsNumber()
  @IsNotEmpty()
  public disciplinaryDeduction: number;

  @IsNumber()
  @IsNotEmpty()
  public otherDeduction: number;

  @IsNumber()
  @IsNotEmpty()
  public noOfDaysInMonth: number;

  @IsNumber()
  @IsNotEmpty()
  public noOfWorkingDays: number;

  @IsNumber()
  @IsNotEmpty()
  public noOfDaysOnLeave: number;

  @IsNumber()
  @IsNotEmpty()
  public overtimeDays: number;

  @IsNumber()
  @IsNotEmpty()
  public noOfDaysAbsent: number;

  @IsNumber()
  @IsNotEmpty()
  public normalHours: number;

  @IsNumber()
  @IsNotEmpty()
  public sundayHours: number;

  @IsNumber()
  @IsNotEmpty()
  public phHours: number;

  @IsNumber()
  @IsNotEmpty()
  public maternityLeaveDays: number;

  @IsNumber()
  @IsNotEmpty()
  public casualLeaveDays: number;

  @IsNumber()
  @IsNotEmpty()
  public unpaidDays: number;

  @IsNumber()
  @IsNotEmpty()
  public suspensionDays: number;

  @IsNumber()
  @IsNotEmpty()
  public unionDue: number;

  @IsNumber()
  @IsNotEmpty()
  public itfContribution: number;

  @IsString()
  @IsNotEmpty()
  public status: string;

  @IsNumber()
  @IsNotEmpty()
  public nsitfContribution: number;

  @IsNumber()
  @IsNotEmpty()
  public totalDeduction: number;

  @IsString()
  @IsNotEmpty()
  public createdBy: string;

  @IsDateString()
  public creationDate: Date;

  @IsString()
  @IsNotEmpty()
  public modifiedBy: string;

  @IsDateString()
  public modificationDate: Date;
}

export class UpdateSalaryDetailsDto {
  @IsString()
  @IsNotEmpty()
  public currency: string;

  @IsDateString()
  public date: Date;

  @IsNumber()
  @IsNotEmpty()
  public basic: number;

  @IsNumber()
  @IsNotEmpty()
  public housing: number;

  @IsNumber()
  @IsNotEmpty()
  public transport: number;

  @IsNumber()
  @IsNotEmpty()
  public hazard: number;

  @IsNumber()
  @IsNotEmpty()
  public inconvenience: number;

  @IsNumber()
  @IsNotEmpty()
  public utility: number;

  @IsNumber()
  @IsNotEmpty()
  public lunch: number;

  @IsNumber()
  @IsNotEmpty()
  public bonus: number;

  @IsNumber()
  @IsNotEmpty()
  public leave: number;

  @IsNumber()
  @IsNotEmpty()
  public call: number;

  @IsNumber()
  @IsNotEmpty()
  public arrears: number;

  @IsNumber()
  @IsNotEmpty()
  public addedResponsibility: number;

  @IsNumber()
  @IsNotEmpty()
  public compound: number;

  @IsNumber()
  @IsNotEmpty()
  public extraDuty: number;

  @IsNumber()
  @IsNotEmpty()
  public overtime: number;

  @IsNumber()
  @IsNotEmpty()
  public sundayOvertime: number;

  @IsNumber()
  @IsNotEmpty()
  public publicHolidayOvertime: number;

  @IsNumber()
  @IsNotEmpty()
  public medicalAllowance: number;

  @IsNumber()
  @IsNotEmpty()
  public otherAllowance: number;

  @IsNumber()
  @IsNotEmpty()
  public repatriationAllowance: number;

  @IsNumber()
  @IsNotEmpty()
  public terminalBenefit: number;

  @IsNumber()
  @IsNotEmpty()
  public maternityLeave: number;

  @IsNumber()
  @IsNotEmpty()
  public allowance: number;

  @IsNumber()
  @IsNotEmpty()
  public grossSalary: number;

  @IsNumber()
  @IsNotEmpty()
  public tax: number;

  @IsNumber()
  @IsNotEmpty()
  public pensionsVoluntary: number;

  @IsNumber()
  @IsNotEmpty()
  public pensionsEmployee: number;

  @IsNumber()
  @IsNotEmpty()
  public pensionEmployer: number;

  @IsNumber()
  @IsNotEmpty()
  public housingNHF: number;

  @IsNumber()
  @IsNotEmpty()
  public absent: number;

  @IsNumber()
  @IsNotEmpty()
  public salaryAdvance: number;

  @IsNumber()
  @IsNotEmpty()
  public nmaDeduction: number;

  @IsNumber()
  @IsNotEmpty()
  public cooperative: number;

  @IsNumber()
  @IsNotEmpty()
  public medicalBill: number;

  @IsNumber()
  @IsNotEmpty()
  public loan: number;

  @IsNumber()
  @IsNotEmpty()
  public disciplinaryDeduction: number;

  @IsNumber()
  @IsNotEmpty()
  public otherDeduction: number;

  @IsNumber()
  @IsNotEmpty()
  public noOfDaysInMonth: number;

  @IsNumber()
  @IsNotEmpty()
  public noOfWorkingDays: number;

  @IsNumber()
  @IsNotEmpty()
  public noOfDaysOnLeave: number;

  @IsNumber()
  @IsNotEmpty()
  public overtimeDays: number;

  @IsNumber()
  @IsNotEmpty()
  public noOfDaysAbsent: number;

  @IsNumber()
  @IsNotEmpty()
  public normalHours: number;

  @IsNumber()
  @IsNotEmpty()
  public sundayHours: number;

  @IsNumber()
  @IsNotEmpty()
  public phHours: number;

  @IsNumber()
  @IsNotEmpty()
  public maternityLeaveDays: number;

  @IsNumber()
  @IsNotEmpty()
  public casualLeaveDays: number;

  @IsNumber()
  @IsNotEmpty()
  public unpaidDays: number;

  @IsNumber()
  @IsNotEmpty()
  public suspensionDays: number;

  @IsNumber()
  @IsNotEmpty()
  public unionDue: number;

  @IsNumber()
  @IsNotEmpty()
  public itfContribution: number;

  @IsString()
  @IsNotEmpty()
  public status: string;

  @IsNumber()
  @IsNotEmpty()
  public nsitfContribution: number;

  @IsNumber()
  @IsNotEmpty()
  public totalDeduction: number;

  @IsString()
  @IsNotEmpty()
  public modifiedBy: string;

  @IsDateString()
  public modificationDate: Date;
}
