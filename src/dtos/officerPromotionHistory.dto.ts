import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateOfficerPromotionHistoryDto {
  @IsNotEmpty()
  @IsInt()
  public rank: string;

  @IsNotEmpty()
  @IsString()
  public periodOfService: string;

  @IsNotEmpty()
  @IsString()
  public policeFormation: string;

  @IsNotEmpty()
  @IsString()
  public position: string;

  @IsNotEmpty()
  @IsInt()
  public officerId: number; // Relationship with OfficerBioData
}

export class UpdateOfficerPromotionHistoryDto {
  @IsNotEmpty()
  @IsInt()
  public rank?: string;

  @IsNotEmpty()
  @IsString()
  public periodOfService?: string;

  @IsNotEmpty()
  @IsString()
  public policeFormation?: string;

  @IsNotEmpty()
  @IsString()
  public position?: string;

  @IsNotEmpty()
  @IsInt()
  public officerId?: number; // Relationship with OfficerBioData
}
