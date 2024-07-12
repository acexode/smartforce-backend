import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { HttpException } from '@/exceptions/httpException';
import { DependentsEntity, Dependents } from '@/entities/dependent.entity';

@Service()
@EntityRepository()
export class DependentsService extends Repository<DependentsEntity> {
  public async findAllDependents(): Promise<Dependents[]> {
    const dependents: Dependents[] = await DependentsEntity.find();
    return dependents;
  }

  public async findDependentsById(dependentsId: number): Promise<Dependents[]> {
    const findDependents: Dependents[] = await DependentsEntity.find({ where: { officerId: dependentsId } });
    if (!findDependents) throw new HttpException(409, "Dependents doesn't exist");

    return findDependents;
  }

  public async createDependents(dependentsData: Dependents[]): Promise<Dependents[]> {
    const createdData: Dependents[] = [];

    for (const tData of dependentsData) {
      const newData: Dependents = await DependentsEntity.create({ ...tData, officer: { id: tData.officerId } }).save();
      createdData.push(newData);
    }
    return createdData;
  }

  public async updateDependents(officerId: number, dependentsData: Dependents[]): Promise<Dependents[]> {
    const existingTrainings = await DependentsEntity.find({ where: { officerId } });
    const updateDependents: Dependents[] = [];
    for (const data of dependentsData) {
      if (data.id) {
        // Existing Training
        const existingTraining = existingTrainings.find(n => n.id === data.id);
        if (existingTraining) {
          await DependentsEntity.update(data.id, data);
          updateDependents.push(await DependentsEntity.findOne(data.id));
        }
      } else {
        // New Training
        const newData = DependentsEntity.create({ ...data, officerId });
        await newData.save();
        updateDependents.push(newData);
      }
    }

    // Optionally delete missing next of kin records
    const newIds = dependentsData.map(n => n.id).filter(id => id);
    for (const existingTraining of existingTrainings) {
      if (!newIds.includes(existingTraining.id)) {
        await DependentsEntity.delete(existingTraining.id);
      }
    }

    return updateDependents;
  }

  public async deleteDependents(dependentsId: number): Promise<Dependents> {
    const findDependents: Dependents = await DependentsEntity.findOne({ where: { id: dependentsId } });
    if (!findDependents) throw new HttpException(409, "Dependents doesn't exist");

    await DependentsEntity.delete({ id: dependentsId });
    return findDependents;
  }
}
