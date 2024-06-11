import { IsString, IsNotEmpty, IsDateString, IsOptional, IsNumber } from 'class-validator';

export class CreateProfessionalAssociationDto {
  @IsString()
  @IsNotEmpty()
  public institution: string;

  @IsString()
  @IsOptional()
  public certificate: string;

  @IsString()
  @IsNotEmpty()
  public membershipId: string;
}

export class UpdateProfessionalAssociationDto {
  @IsString()
  @IsNotEmpty()
  public institution: string;

  @IsString()
  @IsOptional()
  public certificate: string;

  @IsString()
  @IsNotEmpty()
  public membershipId: string;
}
