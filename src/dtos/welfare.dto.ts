import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateOfficerWelfareInformationDto {
  @IsNotEmpty()
  @IsString()
  public ippis: string;

  @IsNotEmpty()
  @IsString()
  public bank: string;

  @IsNotEmpty()
  @IsString()
  public accountNumber: string;

  @IsNotEmpty()
  @IsString()
  public gifMis: string;

  @IsNotEmpty()
  @IsString()
  public taxId: string;

  @IsNotEmpty()
  @IsString()
  public gradeLevel: string;

  @IsNotEmpty()
  @IsString()
  public salaryStructure: string;

  @IsNotEmpty()
  @IsString()
  public noTaxOffice: string;

  @IsNotEmpty()
  @IsString()
  public pfaName: string;

  @IsNotEmpty()
  @IsString()
  public pensionId: string;

  @IsNotEmpty()
  @IsString()
  public cooperativeNo: string;

  @IsNotEmpty()
  @IsString()
  public housingSchemeRefNumber: string;

  @IsNotEmpty()
  @IsString()
  public housingScheme: string;

  @IsNotEmpty()
  @IsString()
  public healthInsurancePin: string;

  @IsNotEmpty()
  @IsString()
  public healthInsurance: string;

  @IsNotEmpty()
  @IsInt()
  public officerId: number; // Relationship with OfficerBioData
}

export class UpdateOfficerWelfareInformationDto {
  @IsOptional()
  @IsString()
  public ippis?: string;

  @IsOptional()
  @IsString()
  public bank?: string;

  @IsOptional()
  @IsString()
  public accountNumber?: string;

  @IsOptional()
  @IsString()
  public gifMis?: string;

  @IsOptional()
  @IsString()
  public taxId?: string;

  @IsOptional()
  @IsString()
  public gradeLevel?: string;

  @IsOptional()
  @IsString()
  public salaryStructure?: string;

  @IsOptional()
  @IsString()
  public noTaxOffice?: string;

  @IsOptional()
  @IsString()
  public pfaName?: string;

  @IsOptional()
  @IsString()
  public pensionId?: string;

  @IsOptional()
  @IsString()
  public cooperativeNo?: string;

  @IsOptional()
  @IsString()
  public housingSchemeRefNumber?: string;

  @IsOptional()
  @IsString()
  public housingScheme?: string;

  @IsOptional()
  @IsString()
  public healthInsurancePin?: string;

  @IsOptional()
  @IsString()
  public healthInsurance?: string;

  @IsOptional()
  @IsInt()
  public officerId?: number; // Relationship with OfficerBioData
}
