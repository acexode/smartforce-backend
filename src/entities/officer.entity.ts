import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne } from 'typeorm';
import { NextOfKinEntity } from './nextOfKin.entity';
import { SalaryDetailsEntity } from './salaryDetails.entity';
import { DependentsEntity } from './dependent.entity';
import { WorkExperienceEntity } from './workexperience.entity';
import { DisciplinaryHistoryEntity } from './disclipinaryHistory.entity';
import { EducationalHistoryEntity } from './educationalHistory.entity';
import { CurrentWorkHistoryEntity } from './currentWorkHistory.entity';
import { APEREntity } from './aper.entity';
import { ProfessionalAssociationEntity } from './professionalAssociation.entity';

export interface IPPISOfficersInfo {
  refNo: string;
  id: number;
  apNo: string;
  lastname: string;
  firstname: string;
  otherNames: string;
  gender: string;
  maritalStatus: string;
  phoneNumber: string;
  dateOfBirth: Date;
  lga: string;
  state: string;
  dateOfEnlistment: Date;
  rank: string;
  salaryStructure: string;
  gradeLevel: string;
  level: number;
  ippis: string;
  bankName: string;
  accountNo: string;
  pfa: string;
  pfaNumber: string;
  category: string;
  createdBy: string;
  creationDate: Date;
  modifiedBy: string;
  modificationDate: Date;
}

@Entity()
export class IPPISOfficersInfoEntity extends BaseEntity implements IPPISOfficersInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  refNo: string;

  @Column()
  @IsNotEmpty()
  apNo: string;

  @Column()
  @IsNotEmpty()
  lastname: string;

  @Column()
  @IsNotEmpty()
  firstname: string;

  @Column()
  @IsNotEmpty()
  otherNames: string;

  @Column()
  @IsNotEmpty()
  gender: string;

  @Column()
  @IsNotEmpty()
  maritalStatus: string;

  @Column()
  @IsNotEmpty()
  phoneNumber: string;

  @Column()
  @IsNotEmpty()
  dateOfBirth: Date;

  @Column()
  @IsNotEmpty()
  lga: string;

  @Column()
  @IsNotEmpty()
  state: string;

  @Column()
  @IsNotEmpty()
  dateOfEnlistment: Date;

  @Column()
  @IsNotEmpty()
  rank: string;

  @Column()
  @IsNotEmpty()
  salaryStructure: string;

  @Column()
  @IsNotEmpty()
  gradeLevel: string;

  @Column()
  @IsNotEmpty()
  level: number;

  @Column()
  @IsNotEmpty()
  ippis: string;

  @Column()
  @IsNotEmpty()
  bankName: string;

  @Column()
  @IsNotEmpty()
  accountNo: string;

  @Column()
  @IsNotEmpty()
  pfa: string;

  @Column()
  @IsNotEmpty()
  pfaNumber: string;

  @Column()
  @IsNotEmpty()
  category: string;

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

  @OneToMany(() => NextOfKinEntity, nextOfKin => nextOfKin.ippisOfficer)
  nextOfKin: NextOfKinEntity[];

  @OneToMany(() => SalaryDetailsEntity, salaryDetails => salaryDetails.ippisOfficer)
  salaryDetails: SalaryDetailsEntity[];

  @OneToMany(() => DependentsEntity, dependents => dependents.ippisOfficer)
  dependents: DependentsEntity[];

  @OneToMany(() => WorkExperienceEntity, workExperience => workExperience.ippisOfficer)
  workExperience: WorkExperienceEntity[];

  @OneToMany(() => DisciplinaryHistoryEntity, disciplinaryHistory => disciplinaryHistory.ippisOfficer)
  disciplinaryHistory: DisciplinaryHistoryEntity[];

  @OneToMany(() => EducationalHistoryEntity, educationalHistory => educationalHistory.ippisOfficer)
  educationalHistory: EducationalHistoryEntity[];

  @OneToOne(() => CurrentWorkHistoryEntity, currentWorkHistory => currentWorkHistory.ippisOfficer)
  currentWorkHistory: CurrentWorkHistoryEntity;

  @OneToMany(() => APEREntity, aper => aper.ippisOfficer)
  aper: APEREntity[];

  @OneToMany(() => ProfessionalAssociationEntity, professionalAssociation => professionalAssociation.ippisOfficer)
  professionalAssociation: ProfessionalAssociationEntity[];
}
