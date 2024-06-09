import { StateCommand } from '@/interfaces/statecommand.interface';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity()
export class StateCommandEntity extends BaseEntity implements StateCommand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  refNo: string;

  @Column()
  name: string;

  @Column()
  department: string;

  @Column()
  location: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  geoCode: string;

  @Column()
  type: string;

  @Column()
  parent: string;

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
