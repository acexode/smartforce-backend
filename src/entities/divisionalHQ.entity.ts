import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { DivisionalHeadquarters } from '@interfaces/divisionalHQ.interface';

@Entity()
export class DivisionalHeadquartersEntity extends BaseEntity implements DivisionalHeadquarters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  refNo: string;

  @Column()
  name: string;

  @Column()
  areaCommand: string;

  @Column()
  state: string;

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
