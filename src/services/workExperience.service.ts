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

  public async findWorkExperienceById(officerId: number): Promise<WorkExperience[]> {
    const findWorkExperience: WorkExperience[] = await WorkExperienceEntity.find({ where: { officerId: officerId } });
    if (!findWorkExperience) throw new HttpException(409, "Work experience doesn't exist");

    return findWorkExperience;
  }

  public async createWorkExperience(workExperienceData: WorkExperience[]): Promise<WorkExperience[]> {
    const createdData: WorkExperience[] = [];

    for (const tData of workExperienceData) {
      const newData: WorkExperience = await WorkExperienceEntity.create({ ...tData, officer: { id: tData.officerId } }).save();
      createdData.push(newData);
    }
    return createdData;
  }

  public async updateWorkExperience(officerId: number, workExperienceData: WorkExperience[]): Promise<WorkExperience[]> {
    const existingWorkExperiences = await WorkExperienceEntity.find({ where: { officerId } });
    console.log(workExperienceData[0]);
    const updatedWorkExperience: WorkExperience[] = [];
    for (const data of workExperienceData) {
      if (data.id) {
        // Existing Training
        const existingWorkExperience = existingWorkExperiences.find(n => n.id === data.id);
        if (existingWorkExperience) {
          await WorkExperienceEntity.update(data.id, data);
          updatedWorkExperience.push(await WorkExperienceEntity.findOne(data.id));
        }
      } else {
        // New Training
        const newData = WorkExperienceEntity.create({ ...data, officerId });
        await newData.save();
        updatedWorkExperience.push(newData);
      }
    }

    // Optionally delete work experience records
    console.log('final stage');
    const newIds = workExperienceData.map(n => n.id).filter(id => id);
    for (const existingWorkExperience of existingWorkExperiences) {
      if (!newIds.includes(existingWorkExperience.id)) {
        await WorkExperienceEntity.delete(existingWorkExperience.id);
      }
    }

    return updatedWorkExperience;
  }

  public async deleteWorkExperience(workExperienceId: number): Promise<WorkExperience> {
    const findWorkExperience: WorkExperience = await WorkExperienceEntity.findOne({ where: { id: workExperienceId } });
    if (!findWorkExperience) throw new HttpException(409, "Work experience doesn't exist");

    await WorkExperienceEntity.delete({ id: workExperienceId });
    return findWorkExperience;
  }
}
