import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { FormationEntity } from '@entities/formation.entity';
import { HttpException } from '@/exceptions/httpException';
import { Formation } from '@interfaces/formation.interface';

@Service()
@EntityRepository()
export class FormationService extends Repository<FormationEntity> {
  public async findAllFormations(): Promise<Formation[]> {
    const formations: Formation[] = await FormationEntity.find();
    return formations;
  }

  public async findFormationById(formationId: number): Promise<Formation> {
    const findFormation: Formation = await FormationEntity.findOne({ where: { id: formationId } });
    if (!findFormation) throw new HttpException(409, "Formation doesn't exist");

    return findFormation;
  }

  public async createFormation(formationData: Formation): Promise<Formation> {
    const createFormationData: Formation = await FormationEntity.create(formationData).save();
    return createFormationData;
  }

  public async updateFormation(formationId: number, formationData: Formation): Promise<Formation> {
    const findFormation: Formation = await FormationEntity.findOne({ where: { id: formationId } });
    if (!findFormation) throw new HttpException(409, "Formation doesn't exist");

    await FormationEntity.update(formationId, formationData);

    const updateFormation: Formation = await FormationEntity.findOne({ where: { id: formationId } });
    return updateFormation;
  }

  public async deleteFormation(formationId: number): Promise<Formation> {
    const findFormation: Formation = await FormationEntity.findOne({ where: { id: formationId } });
    if (!findFormation) throw new HttpException(409, "Formation doesn't exist");

    await FormationEntity.delete({ id: formationId });
    return findFormation;
  }
}
