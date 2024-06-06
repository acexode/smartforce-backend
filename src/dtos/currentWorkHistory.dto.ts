import { IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CreateCurrentWorkHistoryDto {
  @IsString()
  @IsNotEmpty()
  public refNo: string;

  @IsString()
  @IsNotEmpty()
  public employee: string;

  @IsString()
  @IsNotEmpty()
  public reasonForChange: string;

  @IsString()
  @IsNotEmpty()
  public role: string;

  @IsString()
  @IsNotEmpty()
  public rank: string;

  @IsString()
  @IsNotEmpty()
  public formation: string;

  @IsString()
  @IsNotEmpty()
  public stateCommand: string;

  @IsString()
  @IsNotEmpty()
  public specialization: string;

  @IsString()
  @IsNotEmpty()
  public areaCommand: string;

  @IsString()
  @IsNotEmpty()
  public divisionalHQ: string;

  @IsString()
  @IsNotEmpty()
  public policeStation: string;

  @IsString()
  @IsNotEmpty()
  public policeOutpost: string;

  @IsString()
  @IsNotEmpty()
  public villageOutpost: string;

  @IsString()
  @IsNotEmpty()
  public supervisor: string;

  @IsNumber()
  @IsNotEmpty()
  public promotionIntervalInDays: number;

  @IsString()
  @IsNotEmpty()
  public seniorSupervisor: string;

  @IsString()
  @IsNotEmpty()
  public gradeLevel: string;

  @IsString()
  @IsNotEmpty()
  public responsibilities: string;

  @IsDateString()
  public proposedStartDate: Date;

  @IsDateString()
  public startDate: Date;

  @IsDateString()
  public endDate: Date;

  @IsString()
  @IsNotEmpty()
  public status: string;

  @IsString()
  @IsNotEmpty()
  public comment: string;

  @IsString()
  @IsNotEmpty()
  public data: string;

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

export class UpdateCurrentWorkHistoryDto {
  @IsString()
  @IsNotEmpty()
  public reasonForChange: string;

  @IsString()
  @IsNotEmpty()
  public role: string;

  @IsString()
  @IsNotEmpty()
  public rank: string;

  @IsString()
  @IsNotEmpty()
  public formation: string;

  @IsString()
  @IsNotEmpty()
  public stateCommand: string;

  @IsString()
  @IsNotEmpty()
  public specialization: string;

  @IsString()
  @IsNotEmpty()
  public areaCommand: string;

  @IsString()
  @IsNotEmpty()
  public divisionalHQ: string;

  @IsString()
  @IsNotEmpty()
  public policeStation: string;

  @IsString()
  @IsNotEmpty()
  public policeOutpost: string;

  @IsString()
  @IsNotEmpty()
  public villageOutpost: string;

  @IsString()
  @IsNotEmpty()
  public supervisor: string;

  @IsNumber()
  @IsNotEmpty()
  public promotionIntervalInDays: number;

  @IsString()
  @IsNotEmpty()
  public seniorSupervisor: string;

  @IsString()
  @IsNotEmpty()
  public gradeLevel: string;

  @IsString()
  @IsNotEmpty()
  public responsibilities: string;

  @IsDateString()
  public proposedStartDate: Date;

  @IsDateString()
  public startDate: Date;

  @IsDateString()
  public endDate: Date;

  @IsString()
  @IsNotEmpty()
  public status: string;

  @IsString()
  @IsNotEmpty()
  public comment: string;

  @IsString()
  @IsNotEmpty()
  public data: string;

  @IsString()
  @IsNotEmpty()
  public modifiedBy: string;

  @IsDateString()
  public modificationDate: Date;
}
