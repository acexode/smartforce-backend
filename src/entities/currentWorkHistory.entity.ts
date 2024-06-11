import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity';

export interface OfficerCurrentPosting {
  id: number;
  category: string;
  rank: string;
  apForceNo: string;
  currentRole: string;
  dateOfEnlistment: Date;
  existingPostStation: string;
  department: string;
  formation: string;
  stateCommand: string;
  areaCommand: string;
  unit: string;
  subunit: string;
  divisionHq: string;
  policeStation: string;
  officer: any; // Assuming there's a relationship with OfficerBioData
}

@Entity()
export class OfficerCurrentPostingEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  rank: string;

  @Column()
  apForceNo: string;

  @Column()
  currentRole: string;

  @Column()
  dateOfEnlistment: Date;

  @Column()
  existingPostStation: string;

  @Column()
  department: string;

  @Column()
  formation: string;

  @Column()
  stateCommand: string;

  @Column()
  areaCommand: string;

  @Column()
  unit: string;

  @Column()
  subunit: string;

  @Column()
  divisionHq: string;

  @Column()
  policeStation: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => OfficerBioDataEntity, officerBioData => officerBioData.currentPostings)
  officer: OfficerBioDataEntity;
}
