import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity';

export interface Dependents {
  id: number;
  names: string;
  relationshipWithDependents: string;
  noOfDependents: number;
  contactAddress: string;
  officerId: number;
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
  @JoinColumn({ name: 'officerId' })
  officer: OfficerBioDataEntity;

  @Column()
  officerId: number;
}
