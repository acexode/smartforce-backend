import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreatePoliceOutpostDto {
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
  public station: string;

  @IsNotEmpty()
  @IsString()
  public divisionalHq: string;

  @IsNotEmpty()
  @IsString()
  public unit: string;

  @IsNotEmpty()
  @IsString()
  public subunit: string;

  @IsNotEmpty()
  @IsString()
  public areaCommand: string;

  @IsNotEmpty()
  @IsString()
  public department: string;

  @IsNotEmpty()
  @IsString()
  public formation: string;

  @IsNotEmpty()
  @IsString()
  public state: string;

  @IsNotEmpty()
  @IsString()
  public parent: string;

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

export class UpdatePoliceOutpostDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public type: string;

  @IsNotEmpty()
  @IsString()
  public station: string;

  @IsNotEmpty()
  @IsString()
  public divisionalHq: string;

  @IsNotEmpty()
  @IsString()
  public unit: string;

  @IsNotEmpty()
  @IsString()
  public subunit: string;

  @IsNotEmpty()
  @IsString()
  public areaCommand: string;

  @IsNotEmpty()
  @IsString()
  public department: string;

  @IsNotEmpty()
  @IsString()
  public formation: string;

  @IsNotEmpty()
  @IsString()
  public state: string;

  @IsNotEmpty()
  @IsString()
  public parent: string;

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
