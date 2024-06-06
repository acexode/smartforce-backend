import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { IPPISOfficersInfoEntity } from './officer.entity';

export interface CurrentWorkHistory {
  refNo: string;
  id: number;
  employee: string;
  reasonForChange: string;
  role: string;
  rank: string;
  formation: string;
  stateCommand: string;
  specialization: string;
  areaCommand: string;
  divisionalHQ: string;
  policeStation: string;
  policeOutpost: string;
  villageOutpost: string;
  supervisor: string;
  promotionIntervalInDays: number;
  seniorSupervisor: string;
  gradeLevel: string;
  responsibilities: string;
  proposedStartDate: Date;
  startDate: Date;
  endDate: Date;
  status: string;
  comment: string;
  data: string;
  createdBy: string;
  creationDate: Date;
  modifiedBy: string;
  modificationDate: Date;
}

@Entity()
export class CurrentWorkHistoryEntity extends BaseEntity implements CurrentWorkHistory {
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
  reasonForChange: string;

  @Column()
  @IsNotEmpty()
  role: string;

  @Column()
  @IsNotEmpty()
  rank: string;

  @Column()
  @IsNotEmpty()
  formation: string;

  @Column()
  @IsNotEmpty()
  stateCommand: string;

  @Column()
  @IsNotEmpty()
  specialization: string;

  @Column()
  @IsNotEmpty()
  areaCommand: string;

  @Column()
  @IsNotEmpty()
  divisionalHQ: string;

  @Column()
  @IsNotEmpty()
  policeStation: string;

  @Column()
  @IsNotEmpty()
  policeOutpost: string;

  @Column()
  @IsNotEmpty()
  villageOutpost: string;

  @Column()
  @IsNotEmpty()
  supervisor: string;

  @Column()
  @IsNotEmpty()
  promotionIntervalInDays: number;

  @Column()
  @IsNotEmpty()
  seniorSupervisor: string;

  @Column()
  @IsNotEmpty()
  gradeLevel: string;

  @Column()
  @IsNotEmpty()
  responsibilities: string;

  @Column()
  @IsNotEmpty()
  proposedStartDate: Date;

  @Column()
  @IsNotEmpty()
  startDate: Date;

  @Column()
  @IsNotEmpty()
  endDate: Date;

  @Column()
  @IsNotEmpty()
  status: string;

  @Column()
  @IsNotEmpty()
  comment: string;

  @Column()
  @IsNotEmpty()
  data: string;

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

  @OneToOne(() => IPPISOfficersInfoEntity, ippisOfficer => ippisOfficer.currentWorkHistory)
  @JoinColumn()
  ippisOfficer: IPPISOfficersInfoEntity;
}
