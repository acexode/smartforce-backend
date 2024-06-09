import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateUnitDto {
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

export class UpdateUnitDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public type: string;

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
