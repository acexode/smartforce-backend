import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { ProfessionalAssociation, ProfessionalAssociationEntity } from '@entities/professionalAssociation.entity';
import { HttpException } from '@/exceptions/httpException';

@Service()
@EntityRepository()
export class ProfessionalAssociationService extends Repository<ProfessionalAssociationEntity> {
  public async findAllProfessionalAssociation(): Promise<ProfessionalAssociation[]> {
    const professionalAssociation: ProfessionalAssociation[] = await ProfessionalAssociationEntity.find();
    return professionalAssociation;
  }

  public async findProfessionalAssociationById(professionalAssociationId: number): Promise<ProfessionalAssociation> {
    const findProfessionalAssociation: ProfessionalAssociation = await ProfessionalAssociationEntity.findOne({
      where: { id: professionalAssociationId },
    });
    if (!findProfessionalAssociation) throw new HttpException(409, "Professional association doesn't exist");

    return findProfessionalAssociation;
  }

  public async createProfessionalAssociation(professionalAssociationData: ProfessionalAssociation): Promise<ProfessionalAssociation> {
    const createProfessionalAssociationData: ProfessionalAssociation = await ProfessionalAssociationEntity.create(professionalAssociationData).save();
    return createProfessionalAssociationData;
  }

  public async updateProfessionalAssociation(
    professionalAssociationId: number,
    professionalAssociationData: ProfessionalAssociation,
  ): Promise<ProfessionalAssociation> {
    const findProfessionalAssociation: ProfessionalAssociation = await ProfessionalAssociationEntity.findOne({
      where: { id: professionalAssociationId },
    });
    if (!findProfessionalAssociation) throw new HttpException(409, "Professional association doesn't exist");

    await ProfessionalAssociationEntity.update(professionalAssociationId, professionalAssociationData);

    const updateProfessionalAssociation: ProfessionalAssociation = await ProfessionalAssociationEntity.findOne({
      where: { id: professionalAssociationId },
    });
    return updateProfessionalAssociation;
  }

  public async deleteProfessionalAssociation(professionalAssociationId: number): Promise<ProfessionalAssociation> {
    const findProfessionalAssociation: ProfessionalAssociation = await ProfessionalAssociationEntity.findOne({
      where: { id: professionalAssociationId },
    });
    if (!findProfessionalAssociation) throw new HttpException(409, "Professional association doesn't exist");

    await ProfessionalAssociationEntity.delete({ id: professionalAssociationId });
    return findProfessionalAssociation;
  }
}
