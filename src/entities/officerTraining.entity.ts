import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, Relation } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity'; // Adjust the import according to your file structure

export interface OfficerTraining {
  id: number;
  nameOfTraining: string;
  dateOfCompletion: Date;
  certificate: string;
  officerId: number; // Assuming there's a relationship with OfficerBioData
}
@Entity()
export class OfficerTrainingEntity extends BaseEntity implements OfficerTraining {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameOfTraining: string;

  @Column()
  dateOfCompletion: Date;

  @Column()
  certificate: string;

  @ManyToOne(() => OfficerBioDataEntity, officerBioData => officerBioData.trainings)
  @JoinColumn({ name: 'officerId' })
  officer: Relation<OfficerBioDataEntity>;

  @Column()
  officerId: number;
}
