import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Relation } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity';

export interface ProfessionalAssociation {
  id: number;
  institution: string;
  membershipId: string;
  certificate?: string;
  officerId: number;
}

@Entity()
export class ProfessionalAssociationEntity extends BaseEntity implements ProfessionalAssociation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  membershipId: string;

  @Column()
  @IsNotEmpty()
  institution: string;

  @Column({ nullable: true })
  @IsNotEmpty()
  certificate: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => OfficerBioDataEntity, officer => officer.professionalAssociation)
  @JoinColumn({ name: 'officerId' })
  officer: Relation<OfficerBioDataEntity>;

  @Column()
  officerId: number;
}
