import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { EducationalHistory, EducationalHistoryEntity } from '@entities/educationalHistory.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class EducationalHistoryService extends Repository<EducationalHistoryEntity> {
  public async findAllEducationalHistory(): Promise<EducationalHistory[]> {
    const educationalHistory: EducationalHistory[] = await EducationalHistoryEntity.find();
    return educationalHistory;
  }

  public async findEducationalHistoryById(educationalHistoryId: number): Promise<EducationalHistory> {
    const findEducationalHistory: EducationalHistory = await EducationalHistoryEntity.findOne({ where: { id: educationalHistoryId } });
    if (!findEducationalHistory) throw new HttpException(409, "Educational history doesn't exist");

    return findEducationalHistory;
  }

  public async createEducationalHistory(educationalHistoryData: EducationalHistory): Promise<EducationalHistory> {
    const createEducationalHistoryData: EducationalHistory = await EducationalHistoryEntity.create(educationalHistoryData).save();
    return createEducationalHistoryData;
  }

  public async updateEducationalHistory(educationalHistoryId: number, educationalHistoryData: EducationalHistory): Promise<EducationalHistory> {
    const findEducationalHistory: EducationalHistory = await EducationalHistoryEntity.findOne({ where: { id: educationalHistoryId } });
    if (!findEducationalHistory) throw new HttpException(409, "Educational history doesn't exist");

    await EducationalHistoryEntity.update(educationalHistoryId, educationalHistoryData);

    const updateEducationalHistory: EducationalHistory = await EducationalHistoryEntity.findOne({ where: { id: educationalHistoryId } });
    return updateEducationalHistory;
  }

  public async deleteEducationalHistory(educationalHistoryId: number): Promise<EducationalHistory> {
    const findEducationalHistory: EducationalHistory = await EducationalHistoryEntity.findOne({ where: { id: educationalHistoryId } });
    if (!findEducationalHistory) throw new HttpException(409, "Educational history doesn't exist");

    await EducationalHistoryEntity.delete({ id: educationalHistoryId });
    return findEducationalHistory;
  }
}
