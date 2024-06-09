import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Formation } from '@interfaces/formation.interface';

@Entity()
export class FormationEntity extends BaseEntity implements Formation {
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
  zone: string;

  @Column()
  section: string;

  @Column()
  createdBy: string;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  modifiedBy: string;

  @UpdateDateColumn()
  modificationDate: Date;
}
