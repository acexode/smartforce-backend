import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
export interface CommandCategory {
  Id?: number;
  Name: string;
  CategoryLevel: number;
  ParentCommandCategory_Id: number;
}

@Entity()
export class CommandCategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Name: string;

  @Column()
  CategoryLevel: number;

  @Column({ nullable: true })
  ParentCommandCategory_Id: number;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}
