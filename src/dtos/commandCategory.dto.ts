import { IsNotEmpty, IsString, IsDateString, IsInt, IsNumber } from 'class-validator';

export class CreateCommandCategoryDto {
    @IsNotEmpty()
    @IsString()
    public Name: string;


    @IsNotEmpty()
    @IsDateString()
    public CreatedAtUtc: Date;

    @IsNotEmpty()
    @IsDateString()
    public UpdatedAtUtc: Date;

    @IsNotEmpty()
    @IsNumber()
    public CategoryLevel: string;

    @IsString()
    public LeftIndex?: string;

    @IsString()
    public RightIndex?: string;

   @IsNotEmpty()
   @IsNumber()
   public ParentCommandCategory_Id: number;
}

export class UpdateCommandCategoryDto {
    @IsNotEmpty()
    @IsString()
    public Name: string;


    @IsNotEmpty()
    @IsDateString()
    public CreatedAtUtc: Date;

    @IsNotEmpty()
    @IsDateString()
    public UpdatedAtUtc: Date;

    @IsNotEmpty()
    @IsNumber()
    public CategoryLevel: string;

    @IsString()
    public LeftIndex?: string;

    @IsString()
    public RightIndex?: string;

   @IsNotEmpty()
   @IsNumber()
   public ParentCommandCategory_Id: number;
}
