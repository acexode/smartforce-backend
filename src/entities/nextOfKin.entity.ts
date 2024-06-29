import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity';

export interface NextOfKin {
  id: number;
  name: string;
  nin: string;
  phoneNo: string;
  address: string;
  email: string;
  relationship: string;
  officerId: number;
}

@Entity()
export class NextOfKinEntity extends BaseEntity implements NextOfKin {
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
  @JoinColumn({ name: 'officerId' })
  officer: OfficerBioDataEntity;

  @Column()
  officerId: number;
}
