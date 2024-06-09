import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { DivisionalHeadquartersEntity } from '@entities/divisionalHQ.entity';
import { HttpException } from '@/exceptions/httpException';
import { DivisionalHeadquarters } from '@interfaces/divisionalHQ.interface';

@Service()
@EntityRepository()
export class DivisionalHeadquartersService extends Repository<DivisionalHeadquartersEntity> {
  public async findAllDivisionalHeadquarters(): Promise<DivisionalHeadquarters[]> {
    const divisionalHeadquarters: DivisionalHeadquarters[] = await DivisionalHeadquartersEntity.find();
    return divisionalHeadquarters;
  }

  public async findDivisionalHeadquartersById(divisionalHeadquartersId: number): Promise<DivisionalHeadquarters> {
    const findDivisionalHeadquarters: DivisionalHeadquarters = await DivisionalHeadquartersEntity.findOne({
      where: { id: divisionalHeadquartersId },
    });
    if (!findDivisionalHeadquarters) throw new HttpException(409, "Divisional Headquarters doesn't exist");

    return findDivisionalHeadquarters;
  }

  public async createDivisionalHeadquarters(divisionalHeadquartersData: DivisionalHeadquarters): Promise<DivisionalHeadquarters> {
    const createDivisionalHeadquartersData: DivisionalHeadquarters = await DivisionalHeadquartersEntity.create(divisionalHeadquartersData).save();
    return createDivisionalHeadquartersData;
  }

  public async updateDivisionalHeadquarters(
    divisionalHeadquartersId: number,
    divisionalHeadquartersData: DivisionalHeadquarters,
  ): Promise<DivisionalHeadquarters> {
    const findDivisionalHeadquarters: DivisionalHeadquarters = await DivisionalHeadquartersEntity.findOne({
      where: { id: divisionalHeadquartersId },
    });
    if (!findDivisionalHeadquarters) throw new HttpException(409, "Divisional Headquarters doesn't exist");

    await DivisionalHeadquartersEntity.update(divisionalHeadquartersId, divisionalHeadquartersData);

    const updateDivisionalHeadquarters: DivisionalHeadquarters = await DivisionalHeadquartersEntity.findOne({
      where: { id: divisionalHeadquartersId },
    });
    return updateDivisionalHeadquarters;
  }

  public async deleteDivisionalHeadquarters(divisionalHeadquartersId: number): Promise<DivisionalHeadquarters> {
    const findDivisionalHeadquarters: DivisionalHeadquarters = await DivisionalHeadquartersEntity.findOne({
      where: { id: divisionalHeadquartersId },
    });
    if (!findDivisionalHeadquarters) throw new HttpException(409, "Divisional Headquarters doesn't exist");

    await DivisionalHeadquartersEntity.delete({ id: divisionalHeadquartersId });
    return findDivisionalHeadquarters;
  }
}
