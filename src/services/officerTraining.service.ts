import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { OfficerTrainingEntity, OfficerTraining } from '@entities/officerTraining.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class OfficerTrainingService extends Repository<OfficerTrainingEntity> {
  public async findAllTrainings(officerId: number): Promise<OfficerTraining[]> {
    const trainings: OfficerTraining[] = await OfficerTrainingEntity.find({ where: { officerId: officerId } });
    return trainings;
  }

  public async findTrainingById(officerId: number): Promise<OfficerTraining[]> {
    const findTraining: OfficerTraining[] = await OfficerTrainingEntity.find({ where: { officerId: officerId } });
    if (!findTraining) throw new HttpException(409, "Training doesn't exist");

    return findTraining;
  }

  public async createTraining(trainingData: OfficerTraining[]): Promise<OfficerTraining[]> {
    const createdData: OfficerTraining[] = [];

    for (const tData of trainingData) {
      const createNextOfKinData: OfficerTraining = await OfficerTrainingEntity.create({ ...tData, officer: { id: tData.officerId } }).save();
      createdData.push(createNextOfKinData);
    }
    return createdData;
  }

  public async updateTraining(officerId: number, trainingData: OfficerTraining[]): Promise<OfficerTraining[]> {
    const existingTrainings = await OfficerTrainingEntity.find({ where: { officerId } });
    const updatedNTrainings: OfficerTraining[] = [];
    for (const data of trainingData) {
      if (data.id) {
        // Existing Training
        const existingTraining = existingTrainings.find(n => n.id === data.id);
        if (existingTraining) {
          await OfficerTrainingEntity.update(data.id, data);
          updatedNTrainings.push(await OfficerTrainingEntity.findOne(data.id));
        }
      } else {
        // New Training
        const newData = OfficerTrainingEntity.create({ ...data, officerId });
        await newData.save();
        updatedNTrainings.push(newData);
      }
    }

    // Optionally delete missing next of kin records
    const newIds = trainingData.map(n => n.id).filter(id => id);
    for (const existingTraining of existingTrainings) {
      if (!newIds.includes(existingTraining.id)) {
        await OfficerTrainingEntity.delete(existingTraining.id);
      }
    }

    return updatedNTrainings;
  }

  public async deleteTraining(trainingId: number): Promise<OfficerTraining> {
    const findTraining: OfficerTraining = await OfficerTrainingEntity.findOne({ where: { id: trainingId } });
    if (!findTraining) throw new HttpException(409, "Training doesn't exist");

    await OfficerTrainingEntity.delete({ id: trainingId });
    return findTraining;
  }
}
