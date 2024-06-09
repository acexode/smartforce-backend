import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateRankDto {
  @IsNotEmpty()
  @IsString()
  public refNo: string;

  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public type: string;

  @IsNotEmpty()
  @IsString()
  public parent: string;

  @IsNotEmpty()
  @IsString()
  public createdBy: string;

  @IsNotEmpty()
  @IsDateString()
  public creationDate: Date;

  @IsNotEmpty()
  @IsString()
  public modifiedBy: string;

  @IsNotEmpty()
  @IsDateString()
  public modificationDate: Date;
}

export class UpdateRankDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public type: string;

  @IsNotEmpty()
  @IsString()
  public parent: string;

  @IsNotEmpty()
  @IsString()
  public createdBy: string;

  @IsNotEmpty()
  @IsDateString()
  public creationDate: Date;

  @IsNotEmpty()
  @IsString()
  public modifiedBy: string;

  @IsNotEmpty()
  @IsDateString()
  public modificationDate: Date;
}
