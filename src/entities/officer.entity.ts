import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
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
import { UserEntity } from './users.entity';
import { Roles } from '@/enums/role.enum';


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
  role: Roles;
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

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.Officer
  })
    role: Roles;

  // @OneToOne(() => UserEntity, user => user.officerBioData)
  // @JoinColumn()
  // user: UserEntity;

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
