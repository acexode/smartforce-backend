import { IsNotEmpty, IsString, IsDateString, IsInt, IsNumber } from 'class-validator';

export class CreateCommandDto {
  @IsNotEmpty()
  @IsString()
  public Name: string;

  @IsNotEmpty()
  @IsString()
  public Code: string;

  @IsNotEmpty()
  @IsNumber()
  public CommandCategory_Id: number;

  @IsNotEmpty()
  @IsNumber()
  public State_Id: number;

  @IsNotEmpty()
  @IsNumber()
  public LGA_Id: number;

  @IsNotEmpty()
  @IsNumber()
  public AddedBy_Id: number;

  @IsNotEmpty()
  @IsNumber()
  public LastUpdatedBy_Id: number;

  @IsNotEmpty()
  @IsNumber()
  public IsActive: number;

  @IsNotEmpty()
  @IsDateString()
  public CreatedAtUtc: Date;

  @IsNotEmpty()
  @IsDateString()
  public UpdatedAtUtc: Date;

  @IsNotEmpty()
  @IsString()
  public Address: string;

  @IsNotEmpty()
  @IsNumber()
  public CommandType_Id: number;

  @IsNotEmpty()
  @IsString()
  public ParentCode: string;

  @IsNotEmpty()
  @IsNumber()
  public ZonalCommand_Id: number;
}

export class UpdateCommandDto {
  @IsNotEmpty()
  @IsString()
  public Name: string;

  @IsNotEmpty()
  @IsString()
  public Code: string;

  @IsNotEmpty()
  @IsNumber()
  public CommandCategory_Id: number;

  @IsNotEmpty()
  @IsNumber()
  public State_Id: number;

  @IsNotEmpty()
  @IsNumber()
  public LGA_Id: number;

  @IsNotEmpty()
  @IsNumber()
  public AddedBy_Id: number;

  @IsNotEmpty()
  @IsNumber()
  public LastUpdatedBy_Id: number;

  @IsNotEmpty()
  @IsNumber()
  public IsActive: number;

  @IsNotEmpty()
  @IsDateString()
  public CreatedAtUtc: Date;

  @IsNotEmpty()
  @IsDateString()
  public UpdatedAtUtc: Date;

  @IsNotEmpty()
  @IsString()
  public Address: string;

  @IsNotEmpty()
  @IsNumber()
  public CommandType_Id: number;

  @IsNotEmpty()
  @IsString()
  public ParentCode: string;

  @IsNotEmpty()
  @IsNumber()
  public ZonalCommand_Id: number;
}
