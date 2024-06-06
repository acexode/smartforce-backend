import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { IPPISOfficersInfoEntity } from './officer.entity';

export interface Dependents {
  refNo: string;
  id: number;
  employee: string;
  nameOfDependent: string;
  dateOfBirth: Date;
  relationship: string;
  sex: string;
  phoneNumber: string;
  email: string;
  address: string;
  meansOfIdentification: string;
  idPolicyNumber: string;
  commentOptional: string;
  percentageBenefit: number;
  type: string;
  createdBy: string;
  creationDate: Date;
  modifiedBy: string;
  modificationDate: Date;
}

@Entity()
export class DependentsEntity extends BaseEntity implements Dependents {
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
  nameOfDependent: string;

  @Column()
  @IsNotEmpty()
  dateOfBirth: Date;

  @Column()
  @IsNotEmpty()
  relationship: string;

  @Column()
  @IsNotEmpty()
  sex: string;

  @Column()
  @IsNotEmpty()
  phoneNumber: string;

  @Column()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  address: string;

  @Column()
  @IsNotEmpty()
  meansOfIdentification: string;

  @Column()
  @IsNotEmpty()
  idPolicyNumber: string;

  @Column()
  @IsNotEmpty()
  commentOptional: string;

  @Column()
  @IsNotEmpty()
  percentageBenefit: number;

  @Column()
  @IsNotEmpty()
  type: string;

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

  @ManyToOne(() => IPPISOfficersInfoEntity, ippisOfficer => ippisOfficer.dependents)
  ippisOfficer: IPPISOfficersInfoEntity;
}
