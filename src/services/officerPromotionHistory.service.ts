import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { OfficerPromotionHistoryEntity, OfficerPromotionHistory } from '@entities/officerPromotionHistory.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class OfficerPromotionHistoryService extends Repository<OfficerPromotionHistoryEntity> {
  public async findAllPromotionHistories(): Promise<OfficerPromotionHistory[]> {
    const promotionHistories: OfficerPromotionHistory[] = await OfficerPromotionHistoryEntity.find();
    return promotionHistories;
  }

  public async findPromotionHistoryById(promotionHistoryId: number): Promise<OfficerPromotionHistory> {
    const findPromotionHistory: OfficerPromotionHistory = await OfficerPromotionHistoryEntity.findOne({ where: { id: promotionHistoryId } });
    if (!findPromotionHistory) throw new HttpException(409, "Promotion History doesn't exist");

    return findPromotionHistory;
  }

  public async createPromotionHistory(promotionHistoryData: OfficerPromotionHistory): Promise<OfficerPromotionHistory> {
    const createPromotionHistoryData: OfficerPromotionHistory = await OfficerPromotionHistoryEntity.create(promotionHistoryData).save();
    return createPromotionHistoryData;
  }

  public async updatePromotionHistory(promotionHistoryId: number, promotionHistoryData: OfficerPromotionHistory): Promise<OfficerPromotionHistory> {
    const findPromotionHistory: OfficerPromotionHistory = await OfficerPromotionHistoryEntity.findOne({ where: { id: promotionHistoryId } });
    if (!findPromotionHistory) throw new HttpException(409, "Promotion History doesn't exist");

    await OfficerPromotionHistoryEntity.update(promotionHistoryId, promotionHistoryData);

    const updatePromotionHistory: OfficerPromotionHistory = await OfficerPromotionHistoryEntity.findOne({ where: { id: promotionHistoryId } });
    return updatePromotionHistory;
  }

  public async deletePromotionHistory(promotionHistoryId: number): Promise<OfficerPromotionHistory> {
    const findPromotionHistory: OfficerPromotionHistory = await OfficerPromotionHistoryEntity.findOne({ where: { id: promotionHistoryId } });
    if (!findPromotionHistory) throw new HttpException(409, "Promotion History doesn't exist");

    await OfficerPromotionHistoryEntity.delete({ id: promotionHistoryId });
    return findPromotionHistory;
  }
}
