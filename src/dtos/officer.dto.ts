import { IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CreateIPPISOfficersInfoDto {
  @IsString()
  @IsNotEmpty()
  public refNo: string;

  @IsString()
  @IsNotEmpty()
  public apNo: string;

  @IsString()
  @IsNotEmpty()
  public lastname: string;

  @IsString()
  @IsNotEmpty()
  public firstname: string;

  @IsString()
  @IsNotEmpty()
  public otherNames: string;

  @IsString()
  @IsNotEmpty()
  public gender: string;

  @IsString()
  @IsNotEmpty()
  public maritalStatus: string;

  @IsString()
  @IsNotEmpty()
  public phoneNumber: string;

  @IsDateString()
  public dateOfBirth: Date;

  @IsString()
  @IsNotEmpty()
  public lga: string;

  @IsString()
  @IsNotEmpty()
  public state: string;

  @IsDateString()
  public dateOfEnlistment: Date;

  @IsString()
  @IsNotEmpty()
  public rank: string;

  @IsString()
  @IsNotEmpty()
  public salaryStructure: string;

  @IsString()
  @IsNotEmpty()
  public gradeLevel: string;

  @IsNumber()
  @IsNotEmpty()
  public level: number;

  @IsString()
  @IsNotEmpty()
  public ippis: string;

  @IsString()
  @IsNotEmpty()
  public bankName: string;

  @IsString()
  @IsNotEmpty()
  public accountNo: string;

  @IsString()
  @IsNotEmpty()
  public pfa: string;

  @IsString()
  @IsNotEmpty()
  public pfaNumber: string;

  @IsString()
  @IsNotEmpty()
  public category: string;

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

export class UpdateIPPISOfficersInfoDto {
  @IsString()
  @IsNotEmpty()
  public apNo: string;

  @IsString()
  @IsNotEmpty()
  public lastname: string;

  @IsString()
  @IsNotEmpty()
  public firstname: string;

  @IsString()
  @IsNotEmpty()
  public otherNames: string;

  @IsString()
  @IsNotEmpty()
  public gender: string;

  @IsString()
  @IsNotEmpty()
  public maritalStatus: string;

  @IsString()
  @IsNotEmpty()
  public phoneNumber: string;

  @IsDateString()
  public dateOfBirth: Date;

  @IsString()
  @IsNotEmpty()
  public lga: string;

  @IsString()
  @IsNotEmpty()
  public state: string;

  @IsDateString()
  public dateOfEnlistment: Date;

  @IsString()
  @IsNotEmpty()
  public rank: string;

  @IsString()
  @IsNotEmpty()
  public salaryStructure: string;

  @IsString()
  @IsNotEmpty()
  public gradeLevel: string;

  @IsNumber()
  @IsNotEmpty()
  public level: number;

  @IsString()
  @IsNotEmpty()
  public ippis: string;

  @IsString()
  @IsNotEmpty()
  public bankName: string;

  @IsString()
  @IsNotEmpty()
  public accountNo: string;

  @IsString()
  @IsNotEmpty()
  public pfa: string;

  @IsString()
  @IsNotEmpty()
  public pfaNumber: string;

  @IsString()
  @IsNotEmpty()
  public category: string;

  @IsString()
  @IsNotEmpty()
  public modifiedBy: string;

  @IsDateString()
  public modificationDate: Date;
}
