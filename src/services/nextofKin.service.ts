import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { NextOfKin, NextOfKinEntity } from '@entities/nextOfKin.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class NextOfKinService extends Repository<NextOfKinEntity> {
  public async findAllNextOfKin(officerId: number): Promise<NextOfKin[]> {
    const nextOfKins: NextOfKin[] = await NextOfKinEntity.find({ where: { officerId } });
    return nextOfKins;
  }

  public async findNextOfKinById(nextOfKinId: number): Promise<NextOfKin[]> {
    console.log(nextOfKinId);
    const findNextOfKin: NextOfKin[] = await NextOfKinEntity.find({ where: { officerId: nextOfKinId } });
    if (!findNextOfKin) throw new HttpException(409, "Next of Kin doesn't exist");

    return findNextOfKin;
  }

  public async createNextOfKin(nextOfKinData: NextOfKin[]): Promise<NextOfKin[]> {
    console.log(nextOfKinData);
    const createdNextOfKins: NextOfKin[] = [];

    for (const nextOfKin of nextOfKinData) {
      const createNextOfKinData: NextOfKin = await NextOfKinEntity.create({ ...nextOfKin, officer: { id: nextOfKin.officerId } }).save();
      createdNextOfKins.push(createNextOfKinData);
    }

    return createdNextOfKins;
  }

  public async updateNextOfKin(officerId: number, nextOfKinData: NextOfKin[]): Promise<NextOfKin[]> {
    const existingNextOfKins = await NextOfKinEntity.find({ where: { officerId } });
    const updatedNextOfKins: NextOfKin[] = [];

    for (const nextOfKin of nextOfKinData) {
      if (nextOfKin.id) {
        // Existing Next of Kin
        const existingNextOfKin = existingNextOfKins.find(n => n.id === nextOfKin.id);
        if (existingNextOfKin) {
          await NextOfKinEntity.update(nextOfKin.id, nextOfKin);
          updatedNextOfKins.push(await NextOfKinEntity.findOne(nextOfKin.id));
        }
      } else {
        // New Next of Kin
        const newNextOfKin = NextOfKinEntity.create({ ...nextOfKin, officerId });
        await newNextOfKin.save();
        updatedNextOfKins.push(newNextOfKin);
      }
    }

    // Optionally delete missing next of kin records
    const newIds = nextOfKinData.map(n => n.id).filter(id => id);
    for (const existingNextOfKin of existingNextOfKins) {
      if (!newIds.includes(existingNextOfKin.id)) {
        await NextOfKinEntity.delete(existingNextOfKin.id);
      }
    }

    return updatedNextOfKins;
  }

  public async deleteNextOfKin(nextOfKinId: number): Promise<NextOfKin> {
    const findNextOfKin: NextOfKin = await NextOfKinEntity.findOne({ where: { id: nextOfKinId } });
    if (!findNextOfKin) throw new HttpException(409, "Next of Kin doesn't exist");

    await NextOfKinEntity.delete({ id: nextOfKinId });
    return findNextOfKin;
  }
}
