import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne } from 'typeorm';
import { NextOfKinEntity } from './nextOfKin.entity';
import { SalaryDetailsEntity } from './salaryDetails.entity';
import { DependentsEntity } from './dependent.entity';
import { WorkExperienceEntity } from './workexperience.entity';
import { DisciplinaryHistoryEntity } from './disclipinaryHistory.entity';
import { EducationalHistoryEntity } from './educationalHistory.entity';
import { OfficerCurrentPostingEntity } from './currentWorkHistory.entity';
import { APEREntity } from './aper.entity';
import { ProfessionalAssociationEntity } from './professionalAssociation.entity';
import { OfficerMedicalInfoEntity } from './medical.entity';
import { OfficerPromotionHistoryEntity } from './officerPromotionHistory.entity';
import { OfficerTraining, OfficerTrainingEntity } from './officerTraining.entity';

export interface OfficerBioData {
  id: number;
  name: string;
  lastName: string;
  otherName?: string;
  email: string;
  phoneNumber: string;
  nin: string;
  dateOfBirth: Date;
  sex: string;
  residentialAddress: string;
  alternativeAddress?: string;
  maritalStatus: string;
  otherMeansOfIdentification?: string;
  idNumber?: string;
  ethnicity?: string;
  nationality: string;
  stateOfOrigin: string;
  localGovernmentArea: string;
  placeOfBirth: string;
  religion: string;
  tribe: string;
}

@Entity()
export class OfficerBioDataEntity extends BaseEntity implements OfficerBioData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  otherName?: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  nin: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  sex: string;

  @Column()
  residentialAddress: string;

  @Column({ nullable: true })
  alternativeAddress?: string;

  @Column()
  maritalStatus: string;

  @Column({ nullable: true })
  otherMeansOfIdentification?: string;

  @Column({ nullable: true })
  idNumber?: string;

  @Column({ nullable: true })
  ethnicity?: string;

  @Column()
  nationality: string;

  @Column()
  stateOfOrigin: string;

  @Column()
  localGovernmentArea: string;

  @Column()
  placeOfBirth: string;

  @Column()
  religion: string;

  @Column()
  tribe: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => NextOfKinEntity, nextOfKin => nextOfKin.officer)
  nextOfKin: NextOfKinEntity[];

  @OneToMany(() => SalaryDetailsEntity, salaryDetails => salaryDetails.officer)
  salaryDetails: SalaryDetailsEntity[];

  @OneToMany(() => DependentsEntity, dependents => dependents.officer)
  dependents: DependentsEntity[];

  @OneToMany(() => WorkExperienceEntity, workExperience => workExperience.officer)
  workExperience: WorkExperienceEntity[];

  @OneToMany(() => DisciplinaryHistoryEntity, disciplinaryHistory => disciplinaryHistory.officer)
  disciplinaryHistory: DisciplinaryHistoryEntity[];

  @OneToMany(() => EducationalHistoryEntity, educationalHistory => educationalHistory.officer)
  educationalHistory: EducationalHistoryEntity[];

  @OneToOne(() => OfficerCurrentPostingEntity, currentWorkHistory => currentWorkHistory.officer)
  currentPostings: OfficerCurrentPostingEntity;

  @OneToMany(() => APEREntity, aper => aper.officer)
  aper: APEREntity[];

  @OneToMany(() => ProfessionalAssociationEntity, professionalAssociation => professionalAssociation.officer)
  professionalAssociation: ProfessionalAssociationEntity[];

  @OneToMany(() => OfficerMedicalInfoEntity, officerMed => officerMed.officer)
  officerMedical: OfficerMedicalInfoEntity[];

  @OneToMany(() => OfficerMedicalInfoEntity, officerMed => officerMed.officer)
  welfareInformation: OfficerMedicalInfoEntity[];

  @OneToMany(() => OfficerPromotionHistoryEntity, officerMed => officerMed.officer)
  promotionHistories: OfficerPromotionHistoryEntity[];

  @OneToMany(() => OfficerTrainingEntity, officerMed => officerMed.officer)
  trainings: OfficerTrainingEntity[];
}
