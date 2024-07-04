import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
export interface Command {
    Id: number;
    Name: string;
    Code: string;
    CommandCategory_Id: number;
    State_Id: number;
    LGA_Id: number;
    AddedBy_Id: number;
    LastUpdatedBy_Id: number;
    IsActive: number;
    CreatedAtUtc: Date;
    UpdatedAtUtc: Date;
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
  AddedBy_Id: number;

  @Column()
  LastUpdatedBy_Id: number;

  @Column()
  IsActive: number;

  @CreateDateColumn()
  CreatedAtUtc: Date;

  @UpdateDateColumn()
  UpdatedAtUtc: Date;

  @Column()
  Address: string;

  @Column()
  CommandType_Id: number;

  @Column()
  ParentCode: number;

  @Column()
  ZonalCommand_Id: number;

}