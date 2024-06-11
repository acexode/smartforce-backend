import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity';

export interface Dependents {
  id: number;
  names: string;
  relationshipWithDependents: string;
  noOfDependents: number;
  contactAddress: string;
}

@Entity()
export class DependentsEntity extends BaseEntity implements Dependents {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  names: string;

  @Column()
  relationshipWithDependents: string;

  @Column()
  noOfDependents: number;

  @Column()
  contactAddress: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => OfficerBioDataEntity, officerBioData => officerBioData.dependents)
  officer: OfficerBioDataEntity;
}
