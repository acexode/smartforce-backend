import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PoliceOutpost } from '@interfaces/policeOutpost.interface';

@Entity()
export class PoliceOutpostEntity extends BaseEntity implements PoliceOutpost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  refNo: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  station: string;

  @Column()
  divisionalHq: string;

  @Column()
  unit: string;

  @Column()
  subunit: string;

  @Column()
  areaCommand: string;

  @Column()
  department: string;

  @Column()
  formation: string;

  @Column()
  state: string;

  @Column()
  parent: string;

  @Column()
  country: string;

  @Column()
  createdBy: string;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  modifiedBy: string;

  @UpdateDateColumn()
  modificationDate: Date;
}
