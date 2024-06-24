import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { IppisEntity } from '@entities/ippis.entity';
import { HttpException } from '@/exceptions/httpException';
import { Ippis } from '@interfaces/ippis.interface';

@Service()
@EntityRepository()
export class IppisService extends Repository<IppisEntity> {
  public async findAllIppis(): Promise<Ippis[]> {
    const ippis: Ippis[] = await IppisEntity.find();
    return ippis;
  }

  public async findIppisById(ippisId: number): Promise<Ippis> {
    const findIppis: Ippis = await IppisEntity.findOne({ where: { id: ippisId } });
    if (!findIppis) throw new HttpException(409, "Ippis doesn't exist");

    return findIppis;
  }

  public async createIppis(ippisData: Ippis): Promise<Ippis> {
    const createIppisData: Ippis = await IppisEntity.create(ippisData).save();
    return createIppisData;
  }

  public async updateIppis(ippisId: number, ippisData: Ippis): Promise<Ippis> {
    const findIppis: Ippis = await IppisEntity.findOne({ where: { id: ippisId } });
    if (!findIppis) throw new HttpException(409, "Ippis doesn't exist");

    await IppisEntity.update(ippisId, ippisData);

    const updateIppis: Ippis = await IppisEntity.findOne({ where: { id: ippisId } });
    return updateIppis;
  }

  public async deleteIppis(ippisId: number): Promise<Ippis> {
    const findIppis: Ippis = await IppisEntity.findOne({ where: { id: ippisId } });
    if (!findIppis) throw new HttpException(409, "Ippis doesn't exist");

    await IppisEntity.delete({ id: ippisId });
    return findIppis;
  }
}
