import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateDivisionalHeadquartersDto {
  @IsNotEmpty()
  @IsString()
  public refNo: string;

  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public areaCommand: string;

  @IsNotEmpty()
  @IsString()
  public state: string;

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

export class UpdateDivisionalHeadquartersDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public areaCommand: string;

  @IsNotEmpty()
  @IsString()
  public state: string;

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
