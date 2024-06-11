import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { OfficerBioDataEntity } from './officer.entity'; // Adjust the import according to your file structure
import { RankEntity } from './ranks.entity'; // Adjust the import according to your file structure

export interface OfficerPromotionHistory {
  id: number;
  rankId: any; // Foreign key from RankEntity
  periodOfService: string;
  policeFormation: string;
  position: string;
  officer: any; // Assuming there's a relationship with OfficerBioData
}

@Entity()
export class OfficerPromotionHistoryEntity extends BaseEntity implements OfficerPromotionHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => RankEntity)
  @JoinColumn({ name: 'rankId' })
  rankId: RankEntity;

  @Column()
  periodOfService: string;

  @Column()
  policeFormation: string;

  @Column()
  position: string;

  @ManyToOne(() => OfficerBioDataEntity, officerBioData => officerBioData.promotionHistories)
  officer: OfficerBioDataEntity;
}
