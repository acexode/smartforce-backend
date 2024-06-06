import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { IPPISOfficersInfoEntity } from './officer.entity';

export interface EducationalHistory {
  refNo: string;
  id: number;
  employee: string;
  institutionType: string;
  institutionAttended: string;
  degreeObtained: string;
  courseName: string;
  grade: string;
  startDate: Date;
  endDate: Date;
  comment: string;
  createdBy: string;
  creationDate: Date;
  modifiedBy: string;
  modificationDate: Date;
}

@Entity()
export class EducationalHistoryEntity extends BaseEntity implements EducationalHistory {
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
  institutionType: string;

  @Column()
  @IsNotEmpty()
  institutionAttended: string;

  @Column()
  @IsNotEmpty()
  degreeObtained: string;

  @Column()
  @IsNotEmpty()
  courseName: string;

  @Column()
  @IsNotEmpty()
  grade: string;

  @Column()
  @IsNotEmpty()
  startDate: Date;

  @Column()
  @IsNotEmpty()
  endDate: Date;

  @Column()
  @IsNotEmpty()
  comment: string;

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

  @ManyToOne(() => IPPISOfficersInfoEntity, ippisOfficer => ippisOfficer.educationalHistory)
  ippisOfficer: IPPISOfficersInfoEntity;
}
