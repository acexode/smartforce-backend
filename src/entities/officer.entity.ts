import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  Unique,
  Relation,
} from 'typeorm';
import { APEREntity } from './aper.entity';
import { OfficerCurrentPostingEntity } from './currentWorkHistory.entity';
import { DependentsEntity } from './dependent.entity';
import { DisciplinaryHistoryEntity } from './disclipinaryHistory.entity';
import { EducationalHistoryEntity } from './educationalHistory.entity';
import { OfficerMedicalInfoEntity } from './medical.entity';
import { NextOfKinEntity } from './nextOfKin.entity';
import { OfficerPromotionHistoryEntity } from './officerPromotionHistory.entity';
import { OfficerTrainingEntity } from './officerTraining.entity';
import { ProfessionalAssociationEntity } from './professionalAssociation.entity';
import { WorkExperienceEntity } from './workexperience.entity';

export interface OfficerBioData {
  id: number;
  firstName: string;
  lastName: string;
  otherName?: string;
  email: string;
  phoneNumber: string;
  nin: string;
  password: string;
  dateOfBirth: Date;
  sex: string;
  residentialAddress: string;
  alternativeAddress?: string;
  maritalStatus: string;
  ethnicity?: string;
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
  @Unique(['ippisNo'])
  ippisNo: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  otherName?: string;

  @Column()
  @Unique(['email'])
  email: string;

  @Column()
  @Unique(['phoneNumber'])
  phoneNumber: string;

  @Column()
  @Unique(['nin'])
  nin: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  sex: string;

  @Column({ nullable: true })
  residentialAddress: string;

  @Column({ nullable: true })
  alternativeAddress?: string;

  @Column({ nullable: true })
  maritalStatus: string;

  @Column({ nullable: true })
  ethnicity?: string;

  @Column({ nullable: true })
  stateOfOrigin: string;

  @Column({ nullable: true })
  localGovernmentArea: string;

  @Column({ nullable: true })
  placeOfBirth: string;

  @Column({ nullable: true })
  religion: string;

  @Column({ nullable: true })
  tribe: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @OneToOne(() => UserEntity, user => user.officerBioData)
  // @JoinColumn()
  // user: UserEntity;

  @OneToMany(() => NextOfKinEntity, nextOfKin => nextOfKin.officer)
  nextOfKin: Relation<NextOfKinEntity>[];

  @OneToMany(() => DependentsEntity, dependents => dependents.officer)
  dependents: Relation<DependentsEntity>[];

  @OneToMany(() => WorkExperienceEntity, workExperience => workExperience.officer)
  workExperience: Relation<WorkExperienceEntity>[];

  @OneToMany(() => DisciplinaryHistoryEntity, disciplinaryHistory => disciplinaryHistory.officer)
  disciplinaryHistory: Relation<DisciplinaryHistoryEntity>[];

  @OneToMany(() => EducationalHistoryEntity, educationalHistory => educationalHistory.officer)
  educationalHistory: Relation<EducationalHistoryEntity>[];

  @OneToOne(() => OfficerCurrentPostingEntity, currentWorkHistory => currentWorkHistory.officer)
  currentPostings: Relation<OfficerCurrentPostingEntity>;

  @OneToMany(() => APEREntity, aper => aper.officer)
  aper: Relation<APEREntity>[];

  @OneToMany(() => ProfessionalAssociationEntity, professionalAssociation => professionalAssociation.officer)
  professionalAssociation: Relation<ProfessionalAssociationEntity>[];

  @OneToMany(() => OfficerMedicalInfoEntity, officerMed => officerMed.officer)
  officerMedical: Relation<OfficerMedicalInfoEntity>[];

  @OneToMany(() => OfficerMedicalInfoEntity, officerMed => officerMed.officer)
  welfareInformation: Relation<OfficerMedicalInfoEntity>[];

  @OneToMany(() => OfficerPromotionHistoryEntity, officerMed => officerMed.officer)
  promotionHistories: Relation<OfficerPromotionHistoryEntity>[];

  @OneToMany(() => OfficerTrainingEntity, officerMed => officerMed.officer)
  trainings: Relation<OfficerTrainingEntity>[];
}
