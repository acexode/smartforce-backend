import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateAreaCommandDto {
  @IsNotEmpty()
  @IsString()
  public refNo: string;

  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public type: string;

  @IsNotEmpty()
  @IsString()
  public unit: string;

  @IsNotEmpty()
  @IsString()
  public stateCommand: string;

  @IsNotEmpty()
  @IsString()
  public department: string;

  @IsNotEmpty()
  @IsString()
  public country: string;

  @IsNotEmpty()
  @IsString()
  public createdBy: string;

  @IsNotEmpty()
  @IsDateString()
  public creationDate: Date;

  @IsNotEmpty()
  @IsString()
  public modifiedBy: string;

  @IsNotEmpty()
  @IsDateString()
  public modificationDate: Date;
}

export class UpdateAreaCommandDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public type: string;

  @IsNotEmpty()
  @IsString()
  public unit: string;

  @IsNotEmpty()
  @IsString()
  public stateCommand: string;

  @IsNotEmpty()
  @IsString()
  public department: string;

  @IsNotEmpty()
  @IsString()
  public country: string;

  @IsNotEmpty()
  @IsString()
  public createdBy: string;

  @IsNotEmpty()
  @IsDateString()
  public creationDate: Date;

  @IsNotEmpty()
  @IsString()
  public modifiedBy: string;

  @IsNotEmpty()
  @IsDateString()
  public modificationDate: Date;
}
