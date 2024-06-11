import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity';

export interface NextOfKin {
  refNo: string;
  id: number;
  employee: string;
  firstName: string;
  lastName: string;
  otherNames: string;
  phoneNumber: string;
  sex: string;
  email: string;
  contactAddress: string;
  relationship: string;
  createdBy: string;
  creationDate: Date;
  modifiedBy: string;
  modificationDate: Date;
}

@Entity()
export class NextOfKinEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  relationship: string;

  @Column()
  address: string;

  @Column()
  phoneNo: string;

  @Column()
  email: string;

  @Column()
  nin: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => OfficerBioDataEntity, officerBioData => officerBioData.nextOfKin)
  officer: OfficerBioDataEntity;
}
