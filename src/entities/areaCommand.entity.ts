import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { AreaCommand } from '@interfaces/areaCommand.interface';

@Entity()
export class AreaCommandEntity extends BaseEntity implements AreaCommand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  refNo: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  unit: string;

  @Column()
  stateCommand: string;

  @Column()
  department: string;

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
