import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Rank } from '@interfaces/ranks.interface';

@Entity()
export class RankEntity extends BaseEntity implements Rank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  refNo: string;

  @Column()
  name: string;

  @Column()
  type: string;

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
