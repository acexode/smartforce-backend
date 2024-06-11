import { IsNotEmpty, IsString, IsDateString, IsInt, IsOptional } from 'class-validator';

export class CreateOfficerTrainingDto {
  @IsNotEmpty()
  @IsString()
  public nameOfTraining: string;

  @IsNotEmpty()
  @IsDateString()
  public dateOfCompletion: Date;

  @IsNotEmpty()
  @IsString()
  public certificate: string;

  @IsNotEmpty()
  @IsInt()
  public officerBioDataId: number; // Relationship with OfficerBioData
}

export class UpdateOfficerTrainingDto {
  @IsOptional()
  @IsString()
  public nameOfTraining?: string;

  @IsOptional()
  @IsDateString()
  public dateOfCompletion?: Date;

  @IsOptional()
  @IsString()
  public certificate?: string;

  @IsOptional()
  @IsInt()
  public officerBioDataId?: number; // Relationship with OfficerBioData
}
