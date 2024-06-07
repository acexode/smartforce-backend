import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { CurrentWorkHistory, CurrentWorkHistoryEntity } from '@entities/currentWorkHistory.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class CurrentWorkHistoryService extends Repository<CurrentWorkHistoryEntity> {
  public async findAllCurrentWorkHistory(): Promise<CurrentWorkHistory[]> {
    const currentWorkHistory: CurrentWorkHistory[] = await CurrentWorkHistoryEntity.find();
    return currentWorkHistory;
  }

  public async findCurrentWorkHistoryById(currentWorkHistoryId: number): Promise<CurrentWorkHistory> {
    const findCurrentWorkHistory: CurrentWorkHistory = await CurrentWorkHistoryEntity.findOne({ where: { id: currentWorkHistoryId } });
    if (!findCurrentWorkHistory) throw new HttpException(409, "Current work history doesn't exist");

    return findCurrentWorkHistory;
  }

  public async createCurrentWorkHistory(currentWorkHistoryData: CurrentWorkHistory): Promise<CurrentWorkHistory> {
    const createCurrentWorkHistoryData: CurrentWorkHistory = await CurrentWorkHistoryEntity.create(currentWorkHistoryData).save();
    return createCurrentWorkHistoryData;
  }

  public async updateCurrentWorkHistory(currentWorkHistoryId: number, currentWorkHistoryData: CurrentWorkHistory): Promise<CurrentWorkHistory> {
    const findCurrentWorkHistory: CurrentWorkHistory = await CurrentWorkHistoryEntity.findOne({ where: { id: currentWorkHistoryId } });
    if (!findCurrentWorkHistory) throw new HttpException(409, "Current work history doesn't exist");

    await CurrentWorkHistoryEntity.update(currentWorkHistoryId, currentWorkHistoryData);

    const updateCurrentWorkHistory: CurrentWorkHistory = await CurrentWorkHistoryEntity.findOne({ where: { id: currentWorkHistoryId } });
    return updateCurrentWorkHistory;
  }

  public async deleteCurrentWorkHistory(currentWorkHistoryId: number): Promise<CurrentWorkHistory> {
    const findCurrentWorkHistory: CurrentWorkHistory = await CurrentWorkHistoryEntity.findOne({ where: { id: currentWorkHistoryId } });
    if (!findCurrentWorkHistory) throw new HttpException(409, "Current work history doesn't exist");

    await CurrentWorkHistoryEntity.delete({ id: currentWorkHistoryId });
    return findCurrentWorkHistory;
  }
}
