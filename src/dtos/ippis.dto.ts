import { IsNotEmpty, IsString, IsNumber, IsDateString, IsNumberString, IsOptional } from 'class-validator';

export class CreateIppisDto {
    @IsNotEmpty()
    @IsString()
    staffId: string;

    @IsOptional()
    @IsString()
    rank: string;

    @IsOptional()
    @IsString()
    apNo: string;

    @IsOptional()
    @IsString()
    fullName: string;
    
    @IsOptional()
    @IsDateString()
    dateOfBirth: Date;

    @IsOptional()
    @IsString()
    maritalStatus: string;

    @IsOptional()
    @IsString()
    gender: string;

    @IsOptional()
    @IsString()
    gradeCategory: string;

    @IsOptional()
    @IsString()
    grade: string;

    @IsOptional()
    @IsNumber()
    step: number;

    @IsOptional()
    @IsString()
    command: string;

    @IsOptional()
    @IsString()
    phoneNo: string;

    @IsOptional()
    @IsString()
    bankName: string;

    @IsOptional()
    @IsString()
    accountNo: string;

    @IsOptional()
    @IsString()
    pfaName: string;

    @IsOptional()
    @IsString()
    pinNo: string;

    @IsOptional()
    @IsString()
    staffCategory: string;

    @IsOptional()
    @IsString()
    bvn: string;

    @IsOptional()
    @IsString()
    employeeStatus: string;
}

export class UpdateIppisDto {
    @IsOptional()
    @IsString()
    rank: string;

    @IsOptional()
    @IsString()
    surname: string;

    @IsOptional()
    @IsString()
    maritalStatus: string;

    @IsOptional()
    @IsString()
    grade: string;

    @IsOptional()
    @IsNumber()
    step: number;

    @IsOptional()
    @IsNumber()
    command: string;

    @IsOptional()
    @IsString()
    phoneNo: string;

    @IsOptional()
    @IsString()
    bankName: string;

    @IsOptional()
    @IsString()
    accountNo: string;

    @IsOptional()
    @IsString()
    pfaName: string;

    @IsOptional()
    @IsString()
    pinNo: string;

    @IsOptional()
    @IsString()
    employeeStatus: string;
}