import { IsString, IsNotEmpty, IsEmail, IsDateString } from 'class-validator';

export class CreateNextOfKinDto {
  @IsString()
  @IsNotEmpty()
  public refNo: string;

  @IsString()
  @IsNotEmpty()
  public employee: string;

  @IsString()
  @IsNotEmpty()
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  public lastName: string;

  @IsString()
  @IsNotEmpty()
  public otherNames: string;

  @IsString()
  @IsNotEmpty()
  public phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  public sex: string;

  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public contactAddress: string;

  @IsString()
  @IsNotEmpty()
  public relationship: string;

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

export class UpdateNextOfKinDto {
  @IsString()
  @IsNotEmpty()
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  public lastName: string;

  @IsString()
  @IsNotEmpty()
  public otherNames: string;

  @IsString()
  @IsNotEmpty()
  public phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  public sex: string;

  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public contactAddress: string;

  @IsString()
  @IsNotEmpty()
  public relationship: string;

  @IsString()
  @IsNotEmpty()
  public modifiedBy: string;

  @IsDateString()
  public modificationDate: Date;
}
