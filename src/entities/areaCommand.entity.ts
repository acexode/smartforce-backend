import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { AreaCommand } from '@interfaces/areaCommand.interface';

@Entity()
export class AreaCommandEntity extends BaseEntity implements AreaCommand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  unit: string;

  @Column()
  state: string;

  @Column()
  department: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
