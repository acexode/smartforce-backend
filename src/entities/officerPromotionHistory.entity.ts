import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity'; // Adjust the import according to your file structure
import { RankEntity } from './ranks.entity'; // Adjust the import according to your file structure

export interface OfficerPromotionHistory {
  id: number;
  rankId: any; // Foreign key from RankEntity
  periodOfService: string;
  policeFormation: string;
  position: string;
  officerId: number; // Assuming there's a relationship with OfficerBioData
}

@Entity()
export class OfficerPromotionHistoryEntity extends BaseEntity implements OfficerPromotionHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rankId: string;

  @Column()
  periodOfService: string;

  @Column()
  policeFormation: string;

  @Column()
  position: string;

  @ManyToOne(() => OfficerBioDataEntity, officerBioData => officerBioData.promotionHistories)
  @JoinColumn({ name: 'officerId' })
  officer: OfficerBioDataEntity;

  @Column()
  officerId: number;
}
