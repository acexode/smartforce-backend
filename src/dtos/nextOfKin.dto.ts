import { IsNotEmpty, IsOptional, IsEmail, IsString, IsInt } from 'class-validator';

export class CreateNextOfKinDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public relationship: string;

  @IsNotEmpty()
  @IsString()
  public address: string;

  @IsNotEmpty()
  @IsString()
  public phoneNo: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public nin: string;

  @IsNotEmpty()
  @IsInt()
  public officerId: number; // Assuming there's a relationship with OfficerBioData
}

export class UpdateNextOfKinDto {
  @IsOptional()
  @IsString()
  public name?: string;

  @IsOptional()
  @IsString()
  public relationship?: string;

  @IsOptional()
  @IsString()
  public address?: string;

  @IsOptional()
  @IsString()
  public phoneNo?: string;

  @IsOptional()
  @IsEmail()
  public email?: string;

  @IsOptional()
  @IsString()
  public nin?: string;

  @IsOptional()
  @IsInt()
  public officerId?: number; // Assuming there's a relationship with OfficerBioData
}
