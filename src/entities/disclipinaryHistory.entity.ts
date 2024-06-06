import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { IPPISOfficersInfoEntity } from './officer.entity';

export interface DisciplinaryHistory {
  refNo: string;
  id: number;
  employee: string;
  date: Date;
  type: string;
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
  status: string;
  store: string;
  supervisor: string;
  reference: string;
  referenceTable: string;
  createdBy: string;
  creationDate: Date;
  modifiedBy: string;
  modificationDate: Date;
}

@Entity()
export class DisciplinaryHistoryEntity extends BaseEntity implements DisciplinaryHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  refNo: string;

  @Column()
  @IsNotEmpty()
  employee: string;

  @Column()
  @IsNotEmpty()
  date: Date;

  @Column()
  @IsNotEmpty()
  type: string;

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
  status: string;

  @Column()
  @IsNotEmpty()
  store: string;

  @Column()
  @IsNotEmpty()
  supervisor: string;

  @Column()
  @IsNotEmpty()
  reference: string;

  @Column()
  @IsNotEmpty()
  referenceTable: string;

  @Column()
  @IsNotEmpty()
  createdBy: string;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  @IsNotEmpty()
  modifiedBy: string;

  @UpdateDateColumn()
  modificationDate: Date;

  @ManyToOne(() => IPPISOfficersInfoEntity, ippisOfficer => ippisOfficer.disciplinaryHistory)
  ippisOfficer: IPPISOfficersInfoEntity;
}
