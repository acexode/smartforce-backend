import { IsString, IsNotEmpty, IsDateString, IsEmail, IsOptional, IsNumber } from 'class-validator';

export class CreateDependentsDto {
  @IsString()
  @IsNotEmpty()
  public refNo: string;

  @IsString()
  @IsNotEmpty()
  public employee: string;

  @IsString()
  @IsNotEmpty()
  public nameOfDependent: string;

  @IsDateString()
  public dateOfBirth: Date;

  @IsString()
  @IsNotEmpty()
  public relationship: string;

  @IsString()
  @IsNotEmpty()
  public sex: string;

  @IsString()
  @IsNotEmpty()
  public phoneNumber: string;

  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public address: string;

  @IsString()
  @IsNotEmpty()
  public meansOfIdentification: string;

  @IsString()
  @IsNotEmpty()
  public idPolicyNumber: string;

  @IsString()
  @IsOptional()
  public commentOptional: string;

  @IsNumber()
  @IsNotEmpty()
  public percentageBenefit: number;

  @IsString()
  @IsNotEmpty()
  public type: string;

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

export class UpdateDependentsDto {
  @IsString()
  @IsNotEmpty()
  public nameOfDependent: string;

  @IsDateString()
  public dateOfBirth: Date;

  @IsString()
  @IsNotEmpty()
  public relationship: string;

  @IsString()
  @IsNotEmpty()
  public sex: string;

  @IsString()
  @IsNotEmpty()
  public phoneNumber: string;

  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public address: string;

  @IsString()
  @IsNotEmpty()
  public meansOfIdentification: string;

  @IsString()
  @IsNotEmpty()
  public idPolicyNumber: string;

  @IsString()
  @IsOptional()
  public commentOptional: string;

  @IsNumber()
  @IsNotEmpty()
  public percentageBenefit: number;

  @IsString()
  @IsNotEmpty()
  public type: string;

  @IsString()
  @IsNotEmpty()
  public modifiedBy: string;

  @IsDateString()
  public modificationDate: Date;
}
