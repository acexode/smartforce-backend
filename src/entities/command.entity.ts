import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
export interface Command {
  Id?: number;
  Name: string;
  Code: string;
  CommandCategory_Id: number;
  State_Id: number;
  LGA_Id: number;
  IsActive: number;
  Address: string;
  CommandType_Id: number;
  ParentCode: number;
  ZonalCommand_Id: number;
}

@Entity()
export class CommandEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Name: string;

  @Column()
  Code: string;

  @Column()
  CommandCategory_Id: number;

  @Column()
  State_Id: number;

  @Column()
  LGA_Id: number;

  @Column()
  IsActive: number;

  @Column()
  Address: string;

  @Column()
  CommandType_Id: number;

  @Column()
  ParentCode: number;

  @Column({ nullable: true })
  ZonalCommand_Id: number;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}
