import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PoliceOutpost } from '@interfaces/policeOutpost.interface';

@Entity()
export class PoliceOutpostEntity extends BaseEntity implements PoliceOutpost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  station: string;

  @Column()
  divisionalHeadquarters: string;

  @Column()
  areaCommand: string;

  @Column()
  state: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
