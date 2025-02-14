import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, Relation } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity'; // Adjust the import according to your file structure
import { RankEntity } from './ranks.entity'; // Adjust the import according to your file structure

export interface OfficerPromotionHistory {
  id: number;
  rank: any; // Foreign key from RankEntity
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
  rank: string;

  @Column()
  periodOfService: string;

  @Column()
  policeFormation: string;

  @Column()
  position: string;

  @ManyToOne(() => OfficerBioDataEntity, officerBioData => officerBioData.promotionHistories)
  @JoinColumn({ name: 'officerId' })
  officer: Relation<OfficerBioDataEntity>;

  @Column()
  officerId: number;
}
