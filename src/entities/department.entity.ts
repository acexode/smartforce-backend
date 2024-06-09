import { Department } from '@/interfaces/department.interface';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity()
export class DepartmentEntity extends BaseEntity implements Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  refNo: string;

  @Column()
  departmentName: string;

  @Column()
  description: string;

  @Column()
  headOfDepartment: string;

  @Column()
  org: string;

  @Column()
  store: string;

  @Column()
  createdBy: string;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  modifiedBy: string;

  @UpdateDateColumn()
  modificationDate: Date;
}
