import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { HttpException } from '@/exceptions/httpException';
import { IPPISOfficersInfo, IPPISOfficersInfoEntity } from '@/entities/officer.entity';

@Service()
@EntityRepository()
export class IPPISOfficersInfoService extends Repository<IPPISOfficersInfoEntity> {
  public async findAllIPPISOfficersInfo(): Promise<IPPISOfficersInfo[]> {
    const ippisOfficersInfo: IPPISOfficersInfo[] = await IPPISOfficersInfoEntity.find();
    return ippisOfficersInfo;
  }

  public async findIPPISOfficersInfoById(ippisOfficersInfoId: number): Promise<IPPISOfficersInfo> {
    const findIPPISOfficersInfo: IPPISOfficersInfo = await IPPISOfficersInfoEntity.findOne({ where: { id: ippisOfficersInfoId } });
    if (!findIPPISOfficersInfo) throw new HttpException(409, "IPPIS Officers Info doesn't exist");

    return findIPPISOfficersInfo;
  }

  public async createIPPISOfficersInfo(ippisOfficersInfoData: IPPISOfficersInfo): Promise<IPPISOfficersInfo> {
    const createIPPISOfficersInfoData: IPPISOfficersInfo = await IPPISOfficersInfoEntity.create(ippisOfficersInfoData).save();
    return createIPPISOfficersInfoData;
  }

  public async updateIPPISOfficersInfo(ippisOfficersInfoId: number, ippisOfficersInfoData: IPPISOfficersInfo): Promise<IPPISOfficersInfo> {
    const findIPPISOfficersInfo: IPPISOfficersInfo = await IPPISOfficersInfoEntity.findOne({ where: { id: ippisOfficersInfoId } });
    if (!findIPPISOfficersInfo) throw new HttpException(409, "IPPIS Officers Info doesn't exist");

    await IPPISOfficersInfoEntity.update(ippisOfficersInfoId, ippisOfficersInfoData);

    const updateIPPISOfficersInfo: IPPISOfficersInfo = await IPPISOfficersInfoEntity.findOne({ where: { id: ippisOfficersInfoId } });
    return updateIPPISOfficersInfo;
  }

  public async deleteIPPISOfficersInfo(ippisOfficersInfoId: number): Promise<IPPISOfficersInfo> {
    const findIPPISOfficersInfo: IPPISOfficersInfo = await IPPISOfficersInfoEntity.findOne({ where: { id: ippisOfficersInfoId } });
    if (!findIPPISOfficersInfo) throw new HttpException(409, "IPPIS Officers Info doesn't exist");

    await IPPISOfficersInfoEntity.delete({ id: ippisOfficersInfoId });
    return findIPPISOfficersInfo;
  }
}
