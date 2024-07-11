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

  public async findPromotionHistoryById(officerId: number): Promise<OfficerPromotionHistory[]> {
    const findPromotionHistory: OfficerPromotionHistory[] = await OfficerPromotionHistoryEntity.find({
      where: { officerId: officerId },
    });
    if (!findPromotionHistory) throw new HttpException(409, "Promotion History doesn't exist");

    return findPromotionHistory;
  }

  public async createPromotionHistory(promotionHistoryData: OfficerPromotionHistory[]): Promise<OfficerPromotionHistory[]> {
    const createdData: OfficerPromotionHistory[] = [];

    for (const tData of promotionHistoryData) {
      const newData: OfficerPromotionHistory = await OfficerPromotionHistoryEntity.create({ ...tData, officer: { id: tData.officerId } }).save();
      createdData.push(newData);
    }
    return createdData;
  }

  public async updatePromotionHistory(officerId: number, promotionHistoryData: OfficerPromotionHistory[]): Promise<OfficerPromotionHistory[]> {
    const existingPromotions = await OfficerPromotionHistoryEntity.find({ where: { officerId } });
    const updatedPromotion: OfficerPromotionHistory[] = [];
    for (const data of promotionHistoryData) {
      if (data.id) {
        // Existing Training
        const existingPromotion = existingPromotions.find(n => n.id === data.id);
        if (existingPromotion) {
          await OfficerPromotionHistoryEntity.update(data.id, data);
          updatedPromotion.push(await OfficerPromotionHistoryEntity.findOne(data.id));
        }
      } else {
        // New Training
        const newData = OfficerPromotionHistoryEntity.create({ ...data, officerId });
        await newData.save();
        updatedPromotion.push(newData);
      }
    }

    // Optionally delete missing next of kin records
    const newIds = promotionHistoryData.map(n => n.id).filter(id => id);
    for (const existingPromotion of existingPromotions) {
      if (!newIds.includes(existingPromotion.id)) {
        await OfficerPromotionHistoryEntity.delete(existingPromotion.id);
      }
    }

    return updatedPromotion;
  }

  public async deletePromotionHistory(promotionHistoryId: number): Promise<OfficerPromotionHistory> {
    const findPromotionHistory: OfficerPromotionHistory = await OfficerPromotionHistoryEntity.findOne({ where: { id: promotionHistoryId } });
    if (!findPromotionHistory) throw new HttpException(409, "Promotion History doesn't exist");

    await OfficerPromotionHistoryEntity.delete({ id: promotionHistoryId });
    return findPromotionHistory;
  }
}
