import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { PoliceOutpostEntity } from '@entities/policeOutpost.entity';
import { HttpException } from '@/exceptions/httpException';
import { PoliceOutpost } from '@interfaces/policeOutpost.interface';

@Service()
@EntityRepository()
export class PoliceOutpostService extends Repository<PoliceOutpostEntity> {
  public async findAllPoliceOutposts(): Promise<PoliceOutpost[]> {
    const policeOutposts: PoliceOutpost[] = await PoliceOutpostEntity.find();
    return policeOutposts;
  }

  public async findPoliceOutpostById(policeOutpostId: number): Promise<PoliceOutpost> {
    const findPoliceOutpost: PoliceOutpost = await PoliceOutpostEntity.findOne({ where: { id: policeOutpostId } });
    if (!findPoliceOutpost) throw new HttpException(409, "Police Outpost doesn't exist");

    return findPoliceOutpost;
  }

  public async createPoliceOutpost(policeOutpostData: PoliceOutpost): Promise<PoliceOutpost> {
    const createPoliceOutpostData: PoliceOutpost = await PoliceOutpostEntity.create(policeOutpostData).save();
    return createPoliceOutpostData;
  }

  public async updatePoliceOutpost(policeOutpostId: number, policeOutpostData: PoliceOutpost): Promise<PoliceOutpost> {
    const findPoliceOutpost: PoliceOutpost = await PoliceOutpostEntity.findOne({ where: { id: policeOutpostId } });
    if (!findPoliceOutpost) throw new HttpException(409, "Police Outpost doesn't exist");

    await PoliceOutpostEntity.update(policeOutpostId, policeOutpostData);

    const updatePoliceOutpost: PoliceOutpost = await PoliceOutpostEntity.findOne({ where: { id: policeOutpostId } });
    return updatePoliceOutpost;
  }

  public async deletePoliceOutpost(policeOutpostId: number): Promise<PoliceOutpost> {
    const findPoliceOutpost: PoliceOutpost = await PoliceOutpostEntity.findOne({ where: { id: policeOutpostId } });
    if (!findPoliceOutpost) throw new HttpException(409, "Police Outpost doesn't exist");

    await PoliceOutpostEntity.delete({ id: policeOutpostId });
    return findPoliceOutpost;
  }
}
