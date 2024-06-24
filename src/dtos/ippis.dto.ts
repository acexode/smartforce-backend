import { IsNotEmpty, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateIppisDto {
    @IsNotEmpty()
    @IsString()
    staffId: string;

    @IsNotEmpty()
    @IsString()
    rank: string;

    @IsNotEmpty()
    @IsString()
    apNo: string;

    @IsNotEmpty()
    @IsString()
    surname: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsString()
    otherName: string;

    @IsNotEmpty()
    @IsDateString()
    dateOfBirth: Date;

    @IsNotEmpty()
    @IsString()
    maritalStatus: string;

    @IsNotEmpty()
    @IsString()
    gender: string;

    @IsNotEmpty()
    @IsString()
    gradeCategory: string;

    @IsNotEmpty()
    @IsString()
    grade: string;

    @IsNotEmpty()
    @IsNumber()
    step: number;

    @IsNotEmpty()
    @IsNumber()
    command: string;

    @IsNotEmpty()
    @IsNumber()
    phoneNo: number;

    @IsNotEmpty()
    @IsString()
    bankName: string;

    @IsNotEmpty()
    @IsNumber()
    accountNo: number;

    @IsNotEmpty()
    @IsString()
    pfaName: string;

    @IsNotEmpty()
    @IsString()
    pinNo: string;

    @IsNotEmpty()
    @IsString()
    staffCategory: string;

    @IsNotEmpty()
    @IsNumber()
    bvn: number;

    @IsNotEmpty()
    @IsString()
    employeeStatus: string;
}

export class UpdateIppisDto {
    @IsNotEmpty()
    @IsString()
    rank: string;

    @IsNotEmpty()
    @IsString()
    surname: string;

    @IsNotEmpty()
    @IsString()
    maritalStatus: string;

    @IsNotEmpty()
    @IsString()
    grade: string;

    @IsNotEmpty()
    @IsNumber()
    step: number;

    @IsNotEmpty()
    @IsNumber()
    command: string;

    @IsNotEmpty()
    @IsNumber()
    phoneNo: number;

    @IsNotEmpty()
    @IsString()
    bankName: string;

    @IsNotEmpty()
    @IsNumber()
    accountNo: number;

    @IsNotEmpty()
    @IsString()
    pfaName: string;

    @IsNotEmpty()
    @IsString()
    pinNo: string;

    @IsNotEmpty()
    @IsString()
    employeeStatus: string;
}