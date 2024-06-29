import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity'; // adjust the import according to your file structure

export interface OfficerMedicalInfo {
  id: number;
  fullBodyImage: string;
  bloodGroup: string;
  genotype: string;
  height: string;
  weight: string;
  size: string;
  hairColor: string;
  eyeColor: string;
  bodyDefect?: string;
  amputations?: string;
  officerId: number;
}

@Entity()
export class OfficerMedicalInfoEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullBodyImage: string;

  @Column()
  bloodGroup: string;

  @Column()
  genotype: string;

  @Column()
  height: string;

  @Column()
  weight: string;

  @Column()
  size: string;

  @Column()
  hairColor: string;

  @Column()
  eyeColor: string;

  @Column({ nullable: true })
  bodyDefect?: string;

  @Column({ nullable: true })
  amputations?: string;

  @ManyToOne(() => OfficerBioDataEntity, officer => officer.officerMedical)
  @JoinColumn({ name: 'officerId' })
  officer: OfficerBioDataEntity;

  @Column()
  officerId: number;
}
