import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { User } from '@interfaces/users.interface';
import { OfficerBioDataEntity } from './officer.entity';

@Entity()
export class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Unique(['email'])
  email: string;

  @Column()
  @Unique(['ippisNo'])
  ippisNo: string;

  @Column()
  @Unique(['nin'])
  nin: number;

  @Column()
  @Unique(['nin'])
  phone: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  otherName?: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => OfficerBioDataEntity, officerBioData => officerBioData.user)
  officerBioData: OfficerBioDataEntity;
}
