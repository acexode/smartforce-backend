import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Relation } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity';

export interface WorkExperience {
  id: number;
  companyName: string;
  yearOfEntry: number;
  yearOfExit: number;
  employmentLetter: string;
  officerId: number;
}

@Entity()
export class WorkExperienceEntity extends BaseEntity implements WorkExperience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  companyName: string;

  @Column()
  @IsNotEmpty()
  employmentLetter: string;

  @Column()
  @IsNotEmpty()
  yearOfEntry: number;

  @Column()
  @IsNotEmpty()
  yearOfExit: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => OfficerBioDataEntity, officer => officer.workExperience)
  @JoinColumn({ name: 'officerId' })
  officer: Relation<OfficerBioDataEntity>;

  @Column()
  officerId: number;
}
