import { IsString, IsNotEmpty, IsDateString, IsOptional, IsNumber } from 'class-validator';

export class CreateProfessionalAssociationDto {
  @IsString()
  @IsNotEmpty()
  public refNo: string;

  @IsString()
  @IsNotEmpty()
  public employee: string;

  @IsString()
  @IsNotEmpty()
  public institution: string;

  @IsNumber()
  @IsNotEmpty()
  public year: number;

  @IsString()
  @IsNotEmpty()
  public certificateObtained: string;

  @IsString()
  @IsNotEmpty()
  public membershipClass: string;

  @IsString()
  @IsOptional()
  public comment: string;

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

export class UpdateProfessionalAssociationDto {
  @IsString()
  @IsNotEmpty()
  public institution: string;

  @IsNumber()
  @IsNotEmpty()
  public year: number;

  @IsString()
  @IsNotEmpty()
  public certificateObtained: string;

  @IsString()
  @IsNotEmpty()
  public membershipClass: string;

  @IsString()
  @IsOptional()
  public comment: string;

  @IsString()
  @IsNotEmpty()
  public modifiedBy: string;

  @IsDateString()
  public modificationDate: Date;
}
