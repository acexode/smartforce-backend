import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Ippis } from '@interfaces/ippis.interface';

@Entity()
export class IppisEntity extends BaseEntity implements Ippis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['staffId'])
  staffId: string;

  @Column({ nullable: true })
  rank: string;

  @Column({ nullable: true })
  apNo: string;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  maritalStatus: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  gradeCategory: string;

  @Column({ nullable: true })
  grade: string;

  @Column({ nullable: true })
  step: number;

  @Column({ nullable: true })
  command: string;

  @Column({ nullable: true })
  phoneNo: string;

  @Column({ nullable: true })
  bankName: string;

  @Column({ nullable: true })
  accountNo: string;

  @Column({ nullable: true })
  pfaName: string;

  @Column({ nullable: true })
  pinNo: string;

  @Column({ nullable: true })
  staffCategory: string;

  @Column({ nullable: true })
  bvn: string;

  @Column({ nullable: true })
  employeeStatus: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
