import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Ippis } from '@interfaces/ippis.interface';

@Entity()
export class IppisEntity extends BaseEntity implements Ippis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  staffId: string;

  @Column()
  rank: string;

  @Column()
  apNo: string;

  @Column()
  surname: string;

  @Column()
  firstName: string;

  @Column()
  otherName: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  maritalStatus: string;

  @Column()
  gender: string;

  @Column()
  gradeCategory: string;

  @Column()
  grade: string;

  @Column()
  step: number;

  @Column()
  command: string;

  @Column()
  phoneNo: number;

  @Column()
  bankName: string;

  @Column()
  accountNo: number;

  @Column()
  pfaName: string;

  @Column()
  pinNo: string;

  @Column()
  staffCategory: string;

  @Column()
  bvn: number;

  @Column()
  employeeStatus: string;
}
