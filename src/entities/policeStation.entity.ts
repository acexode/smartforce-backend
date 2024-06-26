import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PoliceStation } from '@interfaces/policeStation.interface';

@Entity()
export class PoliceStationEntity extends BaseEntity implements PoliceStation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

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
