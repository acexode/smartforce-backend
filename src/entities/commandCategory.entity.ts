import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
export interface CommandCategory {
    Id: number;
    Name: string;
    CreatedAtUtc: Date;
    UpdatedAtUtc: Date;
    CategoryLevel: number;
    LeftIndex: string;
    RightIndex: string;
    ParentCommandCategory_Id: number;
  }

  @Entity()
export class CommandCategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Name: string;


  @CreateDateColumn()
  CreatedAtUtc: Date;

  @UpdateDateColumn()
  UpdatedAtUtc: Date;


  @Column()
  CategoryLevel: number;

  @Column()
  LeftIndex: string;

  @Column()
  RightIndex: string;

  @Column()
  ParentCommandCategory_Id: number;


}