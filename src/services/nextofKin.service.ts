import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { NextOfKin, NextOfKinEntity } from '@entities/nextOfKin.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class NextOfKinService extends Repository<NextOfKinEntity> {
  public async findAllNextOfKin(): Promise<NextOfKin[]> {
    const nextOfKin: NextOfKin[] = await NextOfKinEntity.find();
    return nextOfKin;
  }

  public async findNextOfKinById(nextOfKinId: number): Promise<NextOfKin> {
    console.log(nextOfKinId);
    const findNextOfKin: NextOfKin = await NextOfKinEntity.findOne({ where: { officerId: nextOfKinId } });
    if (!findNextOfKin) throw new HttpException(409, "Next of Kin doesn't exist");

    return findNextOfKin;
  }

  public async createNextOfKin(nextOfKinData: NextOfKin): Promise<NextOfKin> {
    console.log(nextOfKinData);
    const createNextOfKinData: NextOfKin = await NextOfKinEntity.create({ ...nextOfKinData, officer: { id: nextOfKinData.officerId } }).save();
    return createNextOfKinData;
  }

  public async updateNextOfKin(nextOfKinId: number, nextOfKinData: NextOfKin): Promise<NextOfKin> {
    const findNextOfKin: NextOfKin = await NextOfKinEntity.findOne({ where: { officerId: nextOfKinId } });
    if (!findNextOfKin) throw new HttpException(409, "Next of Kin doesn't exist");

    await NextOfKinEntity.update({ officer: { id: nextOfKinId } }, nextOfKinData);

    const updateNextOfKin: NextOfKin = await NextOfKinEntity.findOne({ where: { officerId: nextOfKinId } });
    return updateNextOfKin;
  }

  public async deleteNextOfKin(nextOfKinId: number): Promise<NextOfKin> {
    const findNextOfKin: NextOfKin = await NextOfKinEntity.findOne({ where: { id: nextOfKinId } });
    if (!findNextOfKin) throw new HttpException(409, "Next of Kin doesn't exist");

    await NextOfKinEntity.delete({ id: nextOfKinId });
    return findNextOfKin;
  }
}
