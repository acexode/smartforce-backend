import { IsString, IsNotEmpty, IsDateString, IsOptional, IsNumber } from 'class-validator';

export class CreateAPERDto {
  @IsString()
  @IsNotEmpty()
  public refNo: string;

  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public employee: string;

  @IsString()
  @IsNotEmpty()
  public division: string;

  @IsString()
  @IsNotEmpty()
  public store: string;

  @IsString()
  @IsNotEmpty()
  public department: string;

  @IsDateString()
  public startDate: Date;

  @IsDateString()
  public endDate: Date;

  @IsString()
  @IsNotEmpty()
  public typeOfAppraisal: string;

  @IsString()
  @IsNotEmpty()
  public employeeGoals: string;

  @IsNumber()
  @IsNotEmpty()
  public targetScore: number;

  @IsNumber()
  @IsNotEmpty()
  public score: number;

  @IsString()
  @IsNotEmpty()
  public colleague: string;

  @IsString()
  @IsNotEmpty()
  public colleagueComment: string;

  @IsString()
  @IsNotEmpty()
  public hrOfficer: string;

  @IsString()
  @IsNotEmpty()
  public hrComment: string;

  @IsString()
  @IsNotEmpty()
  public supervisor: string;

  @IsString()
  @IsNotEmpty()
  public supervisorComment: string;

  @IsString()
  @IsNotEmpty()
  public seniorSupervisor: string;

  @IsString()
  @IsNotEmpty()
  public seniorSupervisorComment: string;

  @IsString()
  @IsOptional()
  public commentOptional: string;

  @IsString()
  @IsNotEmpty()
  public status: string;

  @IsString()
  @IsNotEmpty()
  public reference: string;

  @IsString()
  @IsNotEmpty()
  public referenceTable: string;

  @IsString()
  @IsNotEmpty()
  public plugin: string;

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

export class UpdateAPERDto {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public division: string;

  @IsString()
  @IsNotEmpty()
  public store: string;

  @IsString()
  @IsNotEmpty()
  public department: string;

  @IsDateString()
  public startDate: Date;

  @IsDateString()
  public endDate: Date;

  @IsString()
  @IsNotEmpty()
  public typeOfAppraisal: string;

  @IsString()
  @IsNotEmpty()
  public employeeGoals: string;

  @IsNumber()
  @IsNotEmpty()
  public targetScore: number;

  @IsNumber()
  @IsNotEmpty()
  public score: number;

  @IsString()
  @IsNotEmpty()
  public colleague: string;

  @IsString()
  @IsNotEmpty()
  public colleagueComment: string;

  @IsString()
  @IsNotEmpty()
  public hrOfficer: string;

  @IsString()
  @IsNotEmpty()
  public hrComment: string;

  @IsString()
  @IsNotEmpty()
  public supervisor: string;

  @IsString()
  @IsNotEmpty()
  public supervisorComment: string;

  @IsString()
  @IsNotEmpty()
  public seniorSupervisor: string;

  @IsString()
  @IsNotEmpty()
  public seniorSupervisorComment: string;

  @IsString()
  @IsOptional()
  public commentOptional: string;

  @IsString()
  @IsNotEmpty()
  public status: string;

  @IsString()
  @IsNotEmpty()
  public reference: string;

  @IsString()
  @IsNotEmpty()
  public referenceTable: string;

  @IsString()
  @IsNotEmpty()
  public plugin: string;

  @IsString()
  @IsNotEmpty()
  public modifiedBy: string;

  @IsDateString()
  public modificationDate: Date;
}
