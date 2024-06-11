import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateDependentsDto {
  @IsNotEmpty()
  @IsString()
  public names: string;

  @IsNotEmpty()
  @IsString()
  public relationshipWithDependents: string;

  @IsNotEmpty()
  @IsInt()
  public noOfDependents: number;

  @IsNotEmpty()
  @IsString()
  public contactAddress: string;

  @IsNotEmpty()
  @IsInt()
  public officerId: number;
}

export class UpdateDependentsDto {
  @IsNotEmpty()
  @IsString()
  public names?: string;

  @IsNotEmpty()
  @IsString()
  public relationshipWithDependents?: string;

  @IsNotEmpty()
  @IsInt()
  public noOfDependents?: number;

  @IsNotEmpty()
  @IsString()
  public contactAddress?: string;

  @IsNotEmpty()
  @IsInt()
  public officerId?: number;
}
