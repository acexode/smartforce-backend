import { Department } from '@/interfaces/department.interface';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity()
export class DepartmentEntity extends BaseEntity implements Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  departmentName: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
