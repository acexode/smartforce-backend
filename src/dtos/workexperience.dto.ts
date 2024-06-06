import { IsString, IsNotEmpty, IsDateString, IsOptional, IsNumber } from 'class-validator';

export class CreateWorkExperienceDto {
  @IsString()
  @IsNotEmpty()
  public refNo: string;

  @IsString()
  @IsNotEmpty()
  public employee: string;

  @IsString()
  @IsNotEmpty()
  public companyName: string;

  @IsString()
  @IsNotEmpty()
  public positionHeld: string;

  @IsString()
  @IsNotEmpty()
  public responsibilities: string;

  @IsNumber()
  @IsNotEmpty()
  public yearOfEntry: number;

  @IsNumber()
  @IsNotEmpty()
  public yearOfExit: number;

  @IsString()
  @IsNotEmpty()
  public reasonForExit: string;

  @IsString()
  @IsOptional()
  public commentOptional: string;

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

export class UpdateWorkExperienceDto {
  @IsString()
  @IsNotEmpty()
  public companyName: string;

  @IsString()
  @IsNotEmpty()
  public positionHeld: string;

  @IsString()
  @IsNotEmpty()
  public responsibilities: string;

  @IsNumber()
  @IsNotEmpty()
  public yearOfEntry: number;

  @IsNumber()
  @IsNotEmpty()
  public yearOfExit: number;

  @IsString()
  @IsNotEmpty()
  public reasonForExit: string;

  @IsString()
  @IsOptional()
  public commentOptional: string;

  @IsString()
  @IsNotEmpty()
  public modifiedBy: string;

  @IsDateString()
  public modificationDate: Date;
}
