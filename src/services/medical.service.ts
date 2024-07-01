import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { OfficerMedicalInfoEntity, OfficerMedicalInfo } from '@entities/medical.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class OfficerMedicalInfoService extends Repository<OfficerMedicalInfoEntity> {
  public async findAllAttributes(): Promise<OfficerMedicalInfo[]> {
    const attributes: OfficerMedicalInfo[] = await OfficerMedicalInfoEntity.find();
    return attributes;
  }

  public async findAttributeById(attributeId: number): Promise<OfficerMedicalInfo> {
    const findAttribute: OfficerMedicalInfo = await OfficerMedicalInfoEntity.findOne({ where: { officerId: { id: attributeId } } });
    if (!findAttribute) throw new HttpException(409, "Attribute doesn't exist");

    return findAttribute;
  }

  public async createAttribute(attributeData: OfficerMedicalInfo): Promise<OfficerMedicalInfo> {
    const createAttributeData: OfficerMedicalInfo = await OfficerMedicalInfoEntity.create({
      ...attributeData,
      officer: { id: attributeData.officerId },
    }).save();
    return createAttributeData;
  }

  public async updateAttribute(attributeId: number, attributeData: OfficerMedicalInfo): Promise<OfficerMedicalInfo> {
    const findAttribute: OfficerMedicalInfo = await OfficerMedicalInfoEntity.findOne({ where: { officerId: { id: attributeId } } });
    if (!findAttribute) throw new HttpException(409, "Attribute doesn't exist");

    await OfficerMedicalInfoEntity.update({ officer: { id: attributeId } }, attributeData);

    const updateAttribute: OfficerMedicalInfo = await OfficerMedicalInfoEntity.findOne({ where: { officerId: { id: attributeId } } });
    return updateAttribute;
  }

  public async deleteAttribute(attributeId: number): Promise<OfficerMedicalInfo> {
    const findAttribute: OfficerMedicalInfo = await OfficerMedicalInfoEntity.findOne({ where: { id: attributeId } });
    if (!findAttribute) throw new HttpException(409, "Attribute doesn't exist");

    await OfficerMedicalInfoEntity.delete({ id: attributeId });
    return findAttribute;
  }
}
