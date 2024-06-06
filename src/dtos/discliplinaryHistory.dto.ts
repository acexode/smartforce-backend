import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateDisciplinaryHistoryDto {
  @IsString()
  @IsNotEmpty()
  public refNo: string;

  @IsString()
  @IsNotEmpty()
  public employee: string;

  @IsDateString()
  public date: Date;

  @IsString()
  @IsNotEmpty()
  public type: string;

  @IsString()
  @IsNotEmpty()
  public category: string;

  @IsString()
  @IsNotEmpty()
  public subcategory: string;

  @IsString()
  @IsNotEmpty()
  public charges: string;

  @IsString()
  @IsNotEmpty()
  public offence: string;

  @IsString()
  @IsNotEmpty()
  public disciplinaryMeasure: string;

  @IsString()
  @IsNotEmpty()
  public employeeResponse: string;

  @IsString()
  @IsNotEmpty()
  public circumstance: string;

  @IsString()
  @IsNotEmpty()
  public employeeRepentantAction: string;

  @IsString()
  @IsNotEmpty()
  public supervisorSupport: string;

  @IsString()
  @IsNotEmpty()
  public behavioralExpectations: string;

  @IsString()
  @IsNotEmpty()
  public generalRemarks: string;

  @IsString()
  @IsNotEmpty()
  public comment: string;

  @IsString()
  @IsNotEmpty()
  public status: string;

  @IsString()
  @IsNotEmpty()
  public store: string;

  @IsString()
  @IsNotEmpty()
  public supervisor: string;

  @IsString()
  @IsNotEmpty()
  public reference: string;

  @IsString()
  @IsNotEmpty()
  public referenceTable: string;

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

export class UpdateDisciplinaryHistoryDto {
  @IsDateString()
  public date: Date;

  @IsString()
  @IsNotEmpty()
  public type: string;

  @IsString()
  @IsNotEmpty()
  public category: string;

  @IsString()
  @IsNotEmpty()
  public subcategory: string;

  @IsString()
  @IsNotEmpty()
  public charges: string;

  @IsString()
  @IsNotEmpty()
  public offence: string;

  @IsString()
  @IsNotEmpty()
  public disciplinaryMeasure: string;

  @IsString()
  @IsNotEmpty()
  public employeeResponse: string;

  @IsString()
  @IsNotEmpty()
  public circumstance: string;

  @IsString()
  @IsNotEmpty()
  public employeeRepentantAction: string;

  @IsString()
  @IsNotEmpty()
  public supervisorSupport: string;

  @IsString()
  @IsNotEmpty()
  public behavioralExpectations: string;

  @IsString()
  @IsNotEmpty()
  public generalRemarks: string;

  @IsString()
  @IsNotEmpty()
  public comment: string;

  @IsString()
  @IsNotEmpty()
  public status: string;

  @IsString()
  @IsNotEmpty()
  public store: string;

  @IsString()
  @IsNotEmpty()
  public supervisor: string;

  @IsString()
  @IsNotEmpty()
  public reference: string;

  @IsString()
  @IsNotEmpty()
  public referenceTable: string;

  @IsString()
  @IsNotEmpty()
  public modifiedBy: string;

  @IsDateString()
  public modificationDate: Date;
}
