import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { WorkExperienceService } from '@services/workExperience.service';
import { WorkExperience } from '@/entities/workexperience.entity';

export class WorkExperienceController {
  public workExperience = Container.get(WorkExperienceService);

  public getWorkExperience = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllWorkExperienceData: WorkExperience[] = await this.workExperience.findAllWorkExperience();
      res.status(200).json({ data: findAllWorkExperienceData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getWorkExperienceById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const workExperienceId = Number(req.params.id);
      const findOneWorkExperienceData: WorkExperience[] = await this.workExperience.findWorkExperienceById(workExperienceId);
      res.status(200).json({ data: findOneWorkExperienceData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createWorkExperience = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const workExperienceData: WorkExperience[] = req.body;
      const createWorkExperienceData: WorkExperience[] = await this.workExperience.createWorkExperience(workExperienceData);
      res.status(201).json({ data: createWorkExperienceData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateWorkExperience = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const workExperienceId = Number(req.params.id);
      console.log('ID ');
      const workExperienceData: any = req.body;
      console.log(workExperienceData.workExperiences);
      const updateWorkExperienceData: WorkExperience[] = await this.workExperience.updateWorkExperience(
        workExperienceId,
        workExperienceData.workExperiences,
      );
      res.status(200).json({ data: updateWorkExperienceData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteWorkExperience = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const workExperienceId = Number(req.params.id);
      const deleteWorkExperienceData: WorkExperience = await this.workExperience.deleteWorkExperience(workExperienceId);
      res.status(200).json({ data: deleteWorkExperienceData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
