import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { OfficerTrainingEntity, OfficerTraining } from '@entities/officerTraining.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class OfficerTrainingService extends Repository<OfficerTrainingEntity> {
  public async findAllTrainings(): Promise<OfficerTraining[]> {
    const trainings: OfficerTraining[] = await OfficerTrainingEntity.find();
    return trainings;
  }

  public async findTrainingById(trainingId: number): Promise<OfficerTraining> {
    const findTraining: OfficerTraining = await OfficerTrainingEntity.findOne({ where: { id: trainingId } });
    if (!findTraining) throw new HttpException(409, "Training doesn't exist");

    return findTraining;
  }

  public async createTraining(trainingData: OfficerTraining): Promise<OfficerTraining> {
    const createTrainingData: OfficerTraining = await OfficerTrainingEntity.create(trainingData).save();
    return createTrainingData;
  }

  public async updateTraining(trainingId: number, trainingData: OfficerTraining): Promise<OfficerTraining> {
    const findTraining: OfficerTraining = await OfficerTrainingEntity.findOne({ where: { id: trainingId } });
    if (!findTraining) throw new HttpException(409, "Training doesn't exist");

    await OfficerTrainingEntity.update(trainingId, trainingData);

    const updateTraining: OfficerTraining = await OfficerTrainingEntity.findOne({ where: { id: trainingId } });
    return updateTraining;
  }

  public async deleteTraining(trainingId: number): Promise<OfficerTraining> {
    const findTraining: OfficerTraining = await OfficerTrainingEntity.findOne({ where: { id: trainingId } });
    if (!findTraining) throw new HttpException(409, "Training doesn't exist");

    await OfficerTrainingEntity.delete({ id: trainingId });
    return findTraining;
  }
}
