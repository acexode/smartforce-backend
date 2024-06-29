import { IsNotEmpty, IsString, IsDateString, IsInt } from 'class-validator';

export class CreateOfficerCurrentPostingDto {
  @IsNotEmpty()
  @IsString()
  public category: string;

  @IsNotEmpty()
  @IsString()
  public rank: string;

  @IsNotEmpty()
  @IsString()
  public apForceNo: string;

  @IsNotEmpty()
  @IsString()
  public currentRole: string;

  @IsNotEmpty()
  @IsDateString()
  public dateOfEnlistment: Date;

  @IsNotEmpty()
  @IsString()
  public existingPostStation: string;

  @IsNotEmpty()
  @IsString()
  public department: string;

  @IsNotEmpty()
  @IsString()
  public formation: string;

  @IsNotEmpty()
  @IsString()
  public stateCommand: string;

  @IsNotEmpty()
  @IsString()
  public areaCommand: string;

  @IsNotEmpty()
  @IsString()
  public unit: string;

  @IsNotEmpty()
  @IsString()
  public subunit: string;

  @IsNotEmpty()
  @IsString()
  public divisionHq: string;

  @IsNotEmpty()
  @IsString()
  public policeStation: string;

  @IsNotEmpty()
  @IsInt()
  public officerId: number; // Assuming there's a relationship with OfficerBioData
}

export class UpdateOfficerCurrentPostingDto {
  @IsNotEmpty()
  @IsString()
  public category?: string;

  @IsNotEmpty()
  @IsString()
  public rank?: string;

  @IsNotEmpty()
  @IsString()
  public apForceNo?: string;

  @IsNotEmpty()
  @IsString()
  public currentRole?: string;

  @IsNotEmpty()
  @IsDateString()
  public dateOfEnlistment?: Date;

  @IsNotEmpty()
  @IsString()
  public existingPostStation?: string;

  @IsNotEmpty()
  @IsString()
  public department?: string;

  @IsNotEmpty()
  @IsString()
  public formation?: string;

  @IsNotEmpty()
  @IsString()
  public stateCommand?: string;

  @IsNotEmpty()
  @IsString()
  public areaCommand?: string;

  @IsNotEmpty()
  @IsString()
  public unit?: string;

  @IsNotEmpty()
  @IsString()
  public subunit?: string;

  @IsNotEmpty()
  @IsString()
  public divisionHq?: string;

  @IsNotEmpty()
  @IsString()
  public policeStation?: string;

  @IsNotEmpty()
  @IsInt()
  public officerId?: number; // Assuming there's a relationship with OfficerBioData
}
