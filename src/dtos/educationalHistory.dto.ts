import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateEducationalHistoryDto {
  @IsString()
  @IsNotEmpty()
  public refNo: string;

  @IsString()
  @IsNotEmpty()
  public employee: string;

  @IsString()
  @IsNotEmpty()
  public institutionType: string;

  @IsString()
  @IsNotEmpty()
  public institutionAttended: string;

  @IsString()
  @IsNotEmpty()
  public degreeObtained: string;

  @IsString()
  @IsNotEmpty()
  public courseName: string;

  @IsString()
  @IsNotEmpty()
  public grade: string;

  @IsDateString()
  public startDate: Date;

  @IsDateString()
  public endDate: Date;

  @IsString()
  @IsNotEmpty()
  public comment: string;

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

export class UpdateEducationalHistoryDto {
  @IsString()
  @IsNotEmpty()
  public institutionType: string;

  @IsString()
  @IsNotEmpty()
  public institutionAttended: string;

  @IsString()
  @IsNotEmpty()
  public degreeObtained: string;

  @IsString()
  @IsNotEmpty()
  public courseName: string;

  @IsString()
  @IsNotEmpty()
  public grade: string;

  @IsDateString()
  public startDate: Date;

  @IsDateString()
  public endDate: Date;

  @IsString()
  @IsNotEmpty()
  public comment: string;

  @IsString()
  @IsNotEmpty()
  public modifiedBy: string;

  @IsDateString()
  public modificationDate: Date;
}
