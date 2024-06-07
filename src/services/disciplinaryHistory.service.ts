import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';

import { HttpException } from '@/exceptions/httpException';
import { DisciplinaryHistoryEntity, DisciplinaryHistory } from '@/entities/disclipinaryHistory.entity';

@Service()
@EntityRepository()
export class DisciplinaryHistoryService extends Repository<DisciplinaryHistoryEntity> {
  public async findAllDisciplinaryHistory(): Promise<DisciplinaryHistory[]> {
    const disciplinaryHistory: DisciplinaryHistory[] = await DisciplinaryHistoryEntity.find();
    return disciplinaryHistory;
  }

  public async findDisciplinaryHistoryById(disciplinaryHistoryId: number): Promise<DisciplinaryHistory> {
    const findDisciplinaryHistory: DisciplinaryHistory = await DisciplinaryHistoryEntity.findOne({ where: { id: disciplinaryHistoryId } });
    if (!findDisciplinaryHistory) throw new HttpException(409, "Disciplinary history doesn't exist");

    return findDisciplinaryHistory;
  }

  public async createDisciplinaryHistory(disciplinaryHistoryData: DisciplinaryHistory): Promise<DisciplinaryHistory> {
    const createDisciplinaryHistoryData: DisciplinaryHistory = await DisciplinaryHistoryEntity.create(disciplinaryHistoryData).save();
    return createDisciplinaryHistoryData;
  }

  public async updateDisciplinaryHistory(disciplinaryHistoryId: number, disciplinaryHistoryData: DisciplinaryHistory): Promise<DisciplinaryHistory> {
    const findDisciplinaryHistory: DisciplinaryHistory = await DisciplinaryHistoryEntity.findOne({ where: { id: disciplinaryHistoryId } });
    if (!findDisciplinaryHistory) throw new HttpException(409, "Disciplinary history doesn't exist");

    await DisciplinaryHistoryEntity.update(disciplinaryHistoryId, disciplinaryHistoryData);

    const updateDisciplinaryHistory: DisciplinaryHistory = await DisciplinaryHistoryEntity.findOne({ where: { id: disciplinaryHistoryId } });
    return updateDisciplinaryHistory;
  }

  public async deleteDisciplinaryHistory(disciplinaryHistoryId: number): Promise<DisciplinaryHistory> {
    const findDisciplinaryHistory: DisciplinaryHistory = await DisciplinaryHistoryEntity.findOne({ where: { id: disciplinaryHistoryId } });
    if (!findDisciplinaryHistory) throw new HttpException(409, "Disciplinary history doesn't exist");

    await DisciplinaryHistoryEntity.delete({ id: disciplinaryHistoryId });
    return findDisciplinaryHistory;
  }
}
