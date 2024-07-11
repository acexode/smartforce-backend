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

  public async findEducationalHistoryById(officerId: number): Promise<EducationalHistory[]> {
    const findEducationalHistory: EducationalHistory[] = await EducationalHistoryEntity.find({ where: { officerId: officerId } });
    if (!findEducationalHistory) throw new HttpException(409, "Educational history doesn't exist");

    return findEducationalHistory;
  }

  public async createEducationalHistory(educationalHistoryData: EducationalHistory[]): Promise<EducationalHistory[]> {
    const createdData: EducationalHistory[] = [];

    for (const tData of educationalHistoryData) {
      const newData: EducationalHistory = await EducationalHistoryEntity.create({ ...tData, officer: { id: tData.officerId } }).save();
      createdData.push(newData);
    }
    return createdData;
  }

  public async updateEducationalHistory(officerId: number, educationalHistoryData: EducationalHistory[]): Promise<EducationalHistory[]> {
    const existingTrainings = await EducationalHistoryEntity.find({ where: { officerId } });
    const updatedNTrainings: EducationalHistory[] = [];
    for (const data of educationalHistoryData) {
      if (data.id) {
        // Existing Training
        const existingTraining = existingTrainings.find(n => n.id === data.id);
        if (existingTraining) {
          await EducationalHistoryEntity.update(data.id, data);
          updatedNTrainings.push(await EducationalHistoryEntity.findOne(data.id));
        }
      } else {
        // New Training
        const newData = EducationalHistoryEntity.create({ ...data, officerId });
        await newData.save();
        updatedNTrainings.push(newData);
      }
    }

    // Optionally delete missing next of kin records
    const newIds = educationalHistoryData.map(n => n.id).filter(id => id);
    for (const existingTraining of existingTrainings) {
      if (!newIds.includes(existingTraining.id)) {
        await EducationalHistoryEntity.delete(existingTraining.id);
      }
    }

    return updatedNTrainings;
  }

  public async deleteEducationalHistory(educationalHistoryId: number): Promise<EducationalHistory> {
    const findEducationalHistory: EducationalHistory = await EducationalHistoryEntity.findOne({ where: { id: educationalHistoryId } });
    if (!findEducationalHistory) throw new HttpException(409, "Educational history doesn't exist");

    await EducationalHistoryEntity.delete({ id: educationalHistoryId });
    return findEducationalHistory;
  }
}
