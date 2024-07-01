import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity';

export interface EducationalHistory {
  id: number;
  type: string;
  institution: string;
  degree: string;
  startDate: Date;
  endDate: Date;
  officerId: number;
}

@Entity()
export class EducationalHistoryEntity extends BaseEntity implements EducationalHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  institution: string;

  @Column()
  degree: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => OfficerBioDataEntity, officer => officer.educationalHistory)
  @JoinColumn({ name: 'officerId' })
  officer: OfficerBioDataEntity;

  @Column()
  officerId: number;
}
