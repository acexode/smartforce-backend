import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';

import { HttpException } from '@/exceptions/httpException';
import { WorkExperienceEntity, WorkExperience } from '@/entities/workexperience.entity';

@Service()
@EntityRepository()
export class WorkExperienceService extends Repository<WorkExperienceEntity> {
  public async findAllWorkExperience(): Promise<WorkExperience[]> {
    const workExperience: WorkExperience[] = await WorkExperienceEntity.find();
    return workExperience;
  }

  public async findWorkExperienceById(workExperienceId: number): Promise<WorkExperience> {
    const findWorkExperience: WorkExperience = await WorkExperienceEntity.findOne({ where: { officerId: workExperienceId } });
    if (!findWorkExperience) throw new HttpException(409, "Work experience doesn't exist");

    return findWorkExperience;
  }

  public async createWorkExperience(workExperienceData: WorkExperience): Promise<WorkExperience> {
    const createWorkExperienceData: WorkExperience = await WorkExperienceEntity.create({
      ...workExperienceData,
      officer: { id: workExperienceData.officerId },
    }).save();
    return createWorkExperienceData;
  }

  public async updateWorkExperience(workExperienceId: number, workExperienceData: WorkExperience): Promise<WorkExperience> {
    const findWorkExperience: WorkExperience = await WorkExperienceEntity.findOne({ where: { officerId: workExperienceId } });
    if (!findWorkExperience) throw new HttpException(409, "Work experience doesn't exist");

    await WorkExperienceEntity.update({ officer: { id: workExperienceId } }, workExperienceData);

    const updateWorkExperience: WorkExperience = await WorkExperienceEntity.findOne({ where: { officerId: workExperienceId } });
    return updateWorkExperience;
  }

  public async deleteWorkExperience(workExperienceId: number): Promise<WorkExperience> {
    const findWorkExperience: WorkExperience = await WorkExperienceEntity.findOne({ where: { id: workExperienceId } });
    if (!findWorkExperience) throw new HttpException(409, "Work experience doesn't exist");

    await WorkExperienceEntity.delete({ id: workExperienceId });
    return findWorkExperience;
  }
}
