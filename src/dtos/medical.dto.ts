import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateOfficerMedicalInfoDto {
  @IsNotEmpty()
  @IsString()
  public fullBodyImage: string;

  @IsNotEmpty()
  @IsString()
  public bloodGroup: string;

  @IsNotEmpty()
  @IsString()
  public genotype: string;

  @IsNotEmpty()
  @IsString()
  public height: string;

  @IsNotEmpty()
  @IsString()
  public weight: string;

  @IsNotEmpty()
  @IsString()
  public size: string;

  @IsNotEmpty()
  @IsString()
  public hairColor: string;

  @IsNotEmpty()
  @IsString()
  public eyeColor: string;

  @IsOptional()
  @IsString()
  public bodyDefect?: string;

  @IsOptional()
  @IsString()
  public amputations?: string;

  @IsNotEmpty()
  @IsInt()
  public officerBioDataId: number;
}

export class UpdateOfficerMedicalInfoDto {
  @IsOptional()
  @IsString()
  public fullBodyImage?: string;

  @IsOptional()
  @IsString()
  public bloodGroup?: string;

  @IsOptional()
  @IsString()
  public genotype?: string;

  @IsOptional()
  @IsString()
  public height?: string;

  @IsOptional()
  @IsString()
  public weight?: string;

  @IsOptional()
  @IsString()
  public size?: string;

  @IsOptional()
  @IsString()
  public hairColor?: string;

  @IsOptional()
  @IsString()
  public eyeColor?: string;

  @IsOptional()
  @IsString()
  public bodyDefect?: string;

  @IsOptional()
  @IsString()
  public amputations?: string;

  @IsOptional()
  @IsInt()
  public officerBioDataId?: number;
}
