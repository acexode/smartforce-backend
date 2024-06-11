import { IsString, IsNotEmpty, IsDateString, IsOptional, IsEmail } from 'class-validator';

export class CreateOfficerBioDataDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public lastName: string;

  @IsOptional()
  @IsString()
  public otherName?: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  public nin: string;

  @IsNotEmpty()
  @IsDateString()
  public dateOfBirth: Date;

  @IsNotEmpty()
  @IsString()
  public sex: string;

  @IsNotEmpty()
  @IsString()
  public residentialAddress: string;

  @IsOptional()
  @IsString()
  public alternativeAddress?: string;

  @IsNotEmpty()
  @IsString()
  public maritalStatus: string;

  @IsOptional()
  @IsString()
  public otherMeansOfIdentification?: string;

  @IsOptional()
  @IsString()
  public idNumber?: string;

  @IsOptional()
  @IsString()
  public ethnicity?: string;

  @IsNotEmpty()
  @IsString()
  public nationality: string;

  @IsNotEmpty()
  @IsString()
  public stateOfOrigin: string;

  @IsNotEmpty()
  @IsString()
  public localGovernmentArea: string;

  @IsNotEmpty()
  @IsString()
  public placeOfBirth: string;

  @IsNotEmpty()
  @IsString()
  public religion: string;

  @IsNotEmpty()
  @IsString()
  public tribe: string;
}

export class UpdateOfficerBioDataDto {
  @IsOptional()
  @IsString()
  public name?: string;

  @IsOptional()
  @IsString()
  public lastName?: string;

  @IsOptional()
  @IsString()
  public otherName?: string;

  @IsOptional()
  @IsEmail()
  public email?: string;

  @IsOptional()
  @IsString()
  public phoneNumber?: string;

  @IsOptional()
  @IsString()
  public nin?: string;

  @IsOptional()
  @IsDateString()
  public dateOfBirth?: Date;

  @IsOptional()
  @IsString()
  public sex?: string;

  @IsOptional()
  @IsString()
  public residentialAddress?: string;

  @IsOptional()
  @IsString()
  public alternativeAddress?: string;

  @IsOptional()
  @IsString()
  public maritalStatus?: string;

  @IsOptional()
  @IsString()
  public otherMeansOfIdentification?: string;

  @IsOptional()
  @IsString()
  public idNumber?: string;

  @IsOptional()
  @IsString()
  public ethnicity?: string;

  @IsOptional()
  @IsString()
  public nationality?: string;

  @IsOptional()
  @IsString()
  public stateOfOrigin?: string;

  @IsOptional()
  @IsString()
  public localGovernmentArea?: string;

  @IsOptional()
  @IsString()
  public placeOfBirth?: string;

  @IsOptional()
  @IsString()
  public religion?: string;

  @IsOptional()
  @IsString()
  public tribe?: string;
}
