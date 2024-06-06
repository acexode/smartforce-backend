import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { IPPISOfficersInfoEntity } from './officer.entity';

export interface WorkExperience {
  refNo: string;
  id: number;
  employee: string;
  companyName: string;
  positionHeld: string;
  responsibilities: string;
  yearOfEntry: number;
  yearOfExit: number;
  reasonForExit: string;
  commentOptional: string;
  createdBy: string;
  creationDate: Date;
  modifiedBy: string;
  modificationDate: Date;
}

@Entity()
export class WorkExperienceEntity extends BaseEntity implements WorkExperience {
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
  companyName: string;

  @Column()
  @IsNotEmpty()
  positionHeld: string;

  @Column()
  @IsNotEmpty()
  responsibilities: string;

  @Column()
  @IsNotEmpty()
  yearOfEntry: number;

  @Column()
  @IsNotEmpty()
  yearOfExit: number;

  @Column()
  @IsNotEmpty()
  reasonForExit: string;

  @Column()
  @IsNotEmpty()
  commentOptional: string;

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

  @ManyToOne(() => IPPISOfficersInfoEntity, ippisOfficer => ippisOfficer.workExperience)
  ippisOfficer: IPPISOfficersInfoEntity;
}
