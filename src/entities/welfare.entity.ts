import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity'; // Adjust the import according to your file structure

export interface OfficerWelfareInformation {
  id: number;
  ippis: string;
  bank: string;
  accountNumber: string;
  gifMis: string;
  taxId: string;
  gradeLevel: string;
  salaryStructure: string;
  noTaxOffice: string;
  pfaName: string;
  pensionId: string;
  cooperativeNo: string;
  housingSchemeRefNumber: string;
  housingScheme: string;
  healthInsurancePin: string;
  healthInsurance: string;
  officerId: number; // Relationship with OfficerBioData
}

@Entity()
export class OfficerWelfareInformationEntity extends BaseEntity implements OfficerWelfareInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ippis: string;

  @Column()
  bank: string;

  @Column()
  accountNumber: string;

  @Column()
  gifMis: string;

  @Column()
  taxId: string;

  @Column()
  gradeLevel: string;

  @Column()
  salaryStructure: string;

  @Column()
  noTaxOffice: string;

  @Column()
  pfaName: string;

  @Column()
  pensionId: string;

  @Column()
  cooperativeNo: string;

  @Column()
  housingSchemeRefNumber: string;

  @Column()
  housingScheme: string;

  @Column()
  healthInsurancePin: string;

  @Column()
  healthInsurance: string;

  @ManyToOne(() => OfficerBioDataEntity, officerBioData => officerBioData.welfareInformation)
  @JoinColumn({ name: 'officerId' })
  officer: OfficerBioDataEntity;

  @Column()
  officerId: number;
}
