import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { IPPISOfficersInfoEntity } from './officer.entity';

export interface ProfessionalAssociation {
  refNo: string;
  id: number;
  employee: string;
  institution: string;
  year: number;
  certificateObtained: string;
  membershipClass: string;
  comment: string;
  createdBy: string;
  creationDate: Date;
  modifiedBy: string;
  modificationDate: Date;
}

@Entity()
export class ProfessionalAssociationEntity extends BaseEntity implements ProfessionalAssociation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  refNo: string;

  @Column()
  @IsNotEmpty()
  employee: string;

  @Column()
  @IsNotEmpty()
  institution: string;

  @Column()
  @IsNotEmpty()
  year: number;

  @Column()
  @IsNotEmpty()
  certificateObtained: string;

  @Column()
  @IsNotEmpty()
  membershipClass: string;

  @Column()
  @IsNotEmpty()
  comment: string;

  @Column()
  @IsNotEmpty()
  createdBy: string;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  @IsNotEmpty()
  modifiedBy: string;

  @UpdateDateColumn()
  modificationDate: Date;

  @ManyToOne(() => IPPISOfficersInfoEntity, ippisOfficer => ippisOfficer.professionalAssociation)
  ippisOfficer: IPPISOfficersInfoEntity;
}
