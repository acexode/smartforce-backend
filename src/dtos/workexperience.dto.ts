import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWorkExperienceDto {
  @IsString()
  @IsNotEmpty()
  public companyName: string;

  @IsNumber()
  @IsNotEmpty()
  public yearOfEntry: number;

  @IsNumber()
  @IsNotEmpty()
  public yearOfExit: number;

  @IsString()
  @IsNotEmpty()
  public employmentLetter: string;
}

export class UpdateWorkExperienceDto {
  @IsString()
  @IsNotEmpty()
  public companyName: string;

  @IsNumber()
  @IsNotEmpty()
  public yearOfEntry: number;

  @IsNumber()
  @IsNotEmpty()
  public yearOfExit: number;

  @IsString()
  @IsNotEmpty()
  public employmentLetter: string;
}
