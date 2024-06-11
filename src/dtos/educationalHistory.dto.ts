import { IsNotEmpty, IsString, IsDateString, IsInt } from 'class-validator';

export class CreateEducationalHistoryDto {
  @IsNotEmpty()
  @IsString()
  public type: string;

  @IsNotEmpty()
  @IsString()
  public institution: string;

  @IsNotEmpty()
  @IsString()
  public degree: string;

  @IsNotEmpty()
  @IsDateString()
  public startDate: Date;

  @IsNotEmpty()
  @IsDateString()
  public endDate: Date;

  @IsNotEmpty()
  @IsInt()
  public officerId: number; // Assuming there's a relationship with OfficerBioData
}

export class UpdateEducationalHistoryDto {
  @IsNotEmpty()
  @IsString()
  public type?: string;

  @IsNotEmpty()
  @IsString()
  public institution?: string;

  @IsNotEmpty()
  @IsString()
  public degree?: string;

  @IsNotEmpty()
  @IsDateString()
  public startDate?: Date;

  @IsNotEmpty()
  @IsDateString()
  public endDate?: Date;

  @IsNotEmpty()
  @IsInt()
  public officerId?: number; // Assuming there's a relationship with OfficerBioData
}
