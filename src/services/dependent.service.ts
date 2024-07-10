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

  public async createDependents(dependentsData: Dependents): Promise<Dependents> {
    const createDependentsData: Dependents = await DependentsEntity.create({ ...dependentsData, officer: { id: dependentsData.officerId } }).save();
    return createDependentsData;
  }

  public async updateDependents(dependentsId: number, dependentsData: Dependents): Promise<Dependents> {
    const findDependents: Dependents = await DependentsEntity.findOne({ where: { officerId: dependentsId } });
    if (!findDependents) throw new HttpException(409, "Dependents doesn't exist");

    await DependentsEntity.update({ officer: { id: dependentsId } }, dependentsData);

    const updateDependents: Dependents = await DependentsEntity.findOne({ where: { officerId: dependentsId } });
    return updateDependents;
  }

  public async deleteDependents(dependentsId: number): Promise<Dependents> {
    const findDependents: Dependents = await DependentsEntity.findOne({ where: { id: dependentsId } });
    if (!findDependents) throw new HttpException(409, "Dependents doesn't exist");

    await DependentsEntity.delete({ id: dependentsId });
    return findDependents;
  }
}
