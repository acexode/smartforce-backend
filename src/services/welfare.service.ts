import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { OfficerWelfareInformationEntity, OfficerWelfareInformation } from '@entities/welfare.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class OfficerWelfareInformationService extends Repository<OfficerWelfareInformationEntity> {
  public async findAllWelfareInformation(): Promise<OfficerWelfareInformation[]> {
    const welfareInformation: OfficerWelfareInformation[] = await OfficerWelfareInformationEntity.find();
    return welfareInformation;
  }

  public async findWelfareInformationById(welfareInformationId: number): Promise<OfficerWelfareInformation> {
    const findWelfareInformation: OfficerWelfareInformation = await OfficerWelfareInformationEntity.findOne({ where: { id: welfareInformationId } });
    if (!findWelfareInformation) throw new HttpException(409, "Welfare Information doesn't exist");

    return findWelfareInformation;
  }

  public async createWelfareInformation(welfareInformationData: OfficerWelfareInformation): Promise<OfficerWelfareInformation> {
    const createWelfareInformationData: OfficerWelfareInformation = await OfficerWelfareInformationEntity.create(welfareInformationData).save();
    return createWelfareInformationData;
  }

  public async updateWelfareInformation(
    welfareInformationId: number,
    welfareInformationData: OfficerWelfareInformation,
  ): Promise<OfficerWelfareInformation> {
    const findWelfareInformation: OfficerWelfareInformation = await OfficerWelfareInformationEntity.findOne({ where: { id: welfareInformationId } });
    if (!findWelfareInformation) throw new HttpException(409, "Welfare Information doesn't exist");

    await OfficerWelfareInformationEntity.update(welfareInformationId, welfareInformationData);

    const updateWelfareInformation: OfficerWelfareInformation = await OfficerWelfareInformationEntity.findOne({
      where: { id: welfareInformationId },
    });
    return updateWelfareInformation;
  }

  public async deleteWelfareInformation(welfareInformationId: number): Promise<OfficerWelfareInformation> {
    const findWelfareInformation: OfficerWelfareInformation = await OfficerWelfareInformationEntity.findOne({ where: { id: welfareInformationId } });
    if (!findWelfareInformation) throw new HttpException(409, "Welfare Information doesn't exist");

    await OfficerWelfareInformationEntity.delete({ id: welfareInformationId });
    return findWelfareInformation;
  }
}
