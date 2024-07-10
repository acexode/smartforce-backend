import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { HttpException } from '@/exceptions/httpException';
import { OfficerBioData, OfficerBioDataEntity } from '@/entities/officer.entity';

@Service()
@EntityRepository()
export class OfficerBioDataService extends Repository<OfficerBioDataEntity> {
  public async findAllOfficerBioData(): Promise<OfficerBioData[]> {
    const officerBioData: OfficerBioData[] = await OfficerBioDataEntity.find();
    return officerBioData;
  }

  public async findOfficerBioDataById(OfficerBioDataId: number): Promise<OfficerBioData> {
    console.log(OfficerBioDataId, 'OfficerBioDataId');
    const findOfficerBioData: OfficerBioData = await OfficerBioDataEntity.findOne({
      where: { id: OfficerBioDataId },
      relations: [
        'nextOfKin',
        'dependents',
        'workExperience',
        'disciplinaryHistory',
        'educationalHistory',
        'currentPostings',
        'professionalAssociation',
        'officerMedical',
        'welfareInformation',
        'promotionHistories',
        'trainings',
      ],
    });
    if (!findOfficerBioData) throw new HttpException(409, "IPPIS Officers Info doesn't exist");

    return findOfficerBioData;
  }

  public async createOfficerBioData(OfficerBioDataData: OfficerBioData): Promise<OfficerBioData> {
    const createOfficerBioDataData: OfficerBioData = await OfficerBioDataEntity.create({ ...OfficerBioDataData }).save();
    return createOfficerBioDataData;
  }

  public async updateOfficerBioData(OfficerBioDataId: number, OfficerBioDataData: OfficerBioData): Promise<OfficerBioData> {
    const findOfficerBioData: OfficerBioData = await OfficerBioDataEntity.findOne({ where: { id: OfficerBioDataId } });
    if (!findOfficerBioData) throw new HttpException(409, "IPPIS Officers Info doesn't exist");

    await OfficerBioDataEntity.update(OfficerBioDataId, OfficerBioDataData);

    const updateOfficerBioData: OfficerBioData = await OfficerBioDataEntity.findOne({ where: { id: OfficerBioDataId } });
    return updateOfficerBioData;
  }

  public async deleteOfficerBioData(OfficerBioDataId: number): Promise<OfficerBioData> {
    const findOfficerBioData: OfficerBioData = await OfficerBioDataEntity.findOne({ where: { id: OfficerBioDataId } });
    if (!findOfficerBioData) throw new HttpException(409, "IPPIS Officers Info doesn't exist");

    await OfficerBioDataEntity.delete({ id: OfficerBioDataId });
    return findOfficerBioData;
  }
}
