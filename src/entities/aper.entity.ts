import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { IPPISOfficersInfoEntity } from './officer.entity';

export interface APER {
  refNo: string;
  id: number;
  title: string;
  employee: string;
  division: string;
  store: string;
  department: string;
  startDate: Date;
  endDate: Date;
  typeOfAppraisal: string;
  employeeGoals: string;
  targetScore: number;
  score: number;
  colleague: string;
  colleagueComment: string;
  hrOfficer: string;
  hrComment: string;
  supervisor: string;
  supervisorComment: string;
  seniorSupervisor: string;
  seniorSupervisorComment: string;
  commentOptional: string;
  status: string;
  reference: string;
  referenceTable: string;
  plugin: string;
  createdBy: string;
  creationDate: Date;
  modifiedBy: string;
  modificationDate: Date;
}

@Entity()
export class APEREntity extends BaseEntity implements APER {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  refNo: string;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsNotEmpty()
  employee: string;

  @Column()
  @IsNotEmpty()
  division: string;

  @Column()
  @IsNotEmpty()
  store: string;

  @Column()
  @IsNotEmpty()
  department: string;

  @Column()
  @IsNotEmpty()
  startDate: Date;

  @Column()
  @IsNotEmpty()
  endDate: Date;

  @Column()
  @IsNotEmpty()
  typeOfAppraisal: string;

  @Column()
  @IsNotEmpty()
  employeeGoals: string;

  @Column()
  @IsNotEmpty()
  targetScore: number;

  @Column()
  @IsNotEmpty()
  score: number;

  @Column()
  @IsNotEmpty()
  colleague: string;

  @Column()
  @IsNotEmpty()
  colleagueComment: string;

  @Column()
  @IsNotEmpty()
  hrOfficer: string;

  @Column()
  @IsNotEmpty()
  hrComment: string;

  @Column()
  @IsNotEmpty()
  supervisor: string;

  @Column()
  @IsNotEmpty()
  supervisorComment: string;

  @Column()
  @IsNotEmpty()
  seniorSupervisor: string;

  @Column()
  @IsNotEmpty()
  seniorSupervisorComment: string;

  @Column()
  @IsNotEmpty()
  commentOptional: string;

  @Column()
  @IsNotEmpty()
  status: string;

  @Column()
  @IsNotEmpty()
  reference: string;

  @Column()
  @IsNotEmpty()
  referenceTable: string;

  @Column()
  @IsNotEmpty()
  plugin: string;

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

  @ManyToOne(() => IPPISOfficersInfoEntity, ippisOfficer => ippisOfficer.aper)
  ippisOfficer: IPPISOfficersInfoEntity;
}
