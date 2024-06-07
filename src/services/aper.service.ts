import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { APER, APEREntity } from '@entities/aper.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class APERService extends Repository<APEREntity> {
  public async findAllAPER(): Promise<APER[]> {
    const aper: APER[] = await APEREntity.find();
    return aper;
  }

  public async findAPERById(aperId: number): Promise<APER> {
    const findAPER: APER = await APEREntity.findOne({ where: { id: aperId } });
    if (!findAPER) throw new HttpException(409, "APER doesn't exist");

    return findAPER;
  }

  public async createAPER(aperData: APER): Promise<APER> {
    const createAPERData: APER = await APEREntity.create(aperData).save();
    return createAPERData;
  }

  public async updateAPER(aperId: number, aperData: APER): Promise<APER> {
    const findAPER: APER = await APEREntity.findOne({ where: { id: aperId } });
    if (!findAPER) throw new HttpException(409, "APER doesn't exist");

    await APEREntity.update(aperId, aperData);

    const updateAPER: APER = await APEREntity.findOne({ where: { id: aperId } });
    return updateAPER;
  }

  public async deleteAPER(aperId: number): Promise<APER> {
    const findAPER: APER = await APEREntity.findOne({ where: { id: aperId } });
    if (!findAPER) throw new HttpException(409, "APER doesn't exist");

    await APEREntity.delete({ id: aperId });
    return findAPER;
  }
}
