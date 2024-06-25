import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { DivisionalHeadquarters } from '@interfaces/divisionalHQ.interface';

@Entity()
export class DivisionalHeadquartersEntity extends BaseEntity implements DivisionalHeadquarters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  areaCommand: string;

  @Column()
  state: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
