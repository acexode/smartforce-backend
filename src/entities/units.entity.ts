import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Unit } from '@interfaces/units.interface';

@Entity()
export class UnitEntity extends BaseEntity implements Unit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  refNo: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  department: string;

  @Column()
  formation: string;

  @Column()
  state: string;

  @Column()
  parent: string;

  @Column()
  createdBy: string;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  modifiedBy: string;

  @UpdateDateColumn()
  modificationDate: Date;
}
