import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity';

export interface DisciplinaryHistory {
  id: number;
  employee: string;
  date: Date;
  category: string;
  subcategory: string;
  charges: string;
  offence: string;
  disciplinaryMeasure: string;
  employeeResponse: string;
  circumstance: string;
  employeeRepentantAction: string;
  supervisorSupport: string;
  behavioralExpectations: string;
  generalRemarks: string;
  comment: string;
  supervisor: string;
}

@Entity()
export class DisciplinaryHistoryEntity extends BaseEntity implements DisciplinaryHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  employee: string;

  @Column()
  @IsNotEmpty()
  date: Date;

  @Column()
  @IsNotEmpty()
  category: string;

  @Column()
  @IsNotEmpty()
  subcategory: string;

  @Column()
  @IsNotEmpty()
  charges: string;

  @Column()
  @IsNotEmpty()
  offence: string;

  @Column()
  @IsNotEmpty()
  disciplinaryMeasure: string;

  @Column()
  @IsNotEmpty()
  employeeResponse: string;

  @Column()
  @IsNotEmpty()
  circumstance: string;

  @Column()
  @IsNotEmpty()
  employeeRepentantAction: string;

  @Column()
  @IsNotEmpty()
  supervisorSupport: string;

  @Column()
  @IsNotEmpty()
  behavioralExpectations: string;

  @Column()
  @IsNotEmpty()
  generalRemarks: string;

  @Column()
  @IsNotEmpty()
  comment: string;

  @Column()
  @IsNotEmpty()
  supervisor: string;

  @ManyToOne(() => OfficerBioDataEntity, officer => officer.disciplinaryHistory)
  officer: OfficerBioDataEntity;
}
