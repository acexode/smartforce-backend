import { Router } from 'express';
import { WorkExperienceController } from '@controllers/workExperience.controller';
import { CreateWorkExperienceDto, UpdateWorkExperienceDto } from '@/dtos/workexperience.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class WorkExperienceRoute implements Routes {
  public path = '/officer/work-experience';
  public router = Router();
  public workExperience = new WorkExperienceController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.workExperience.getWorkExperience);
    this.router.get(`${this.path}/:id(\\d+)`, this.workExperience.getWorkExperienceById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateWorkExperienceDto), this.workExperience.createWorkExperience);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateWorkExperienceDto, true), this.workExperience.updateWorkExperience);
    this.router.delete(`${this.path}/:id(\\d+)`, this.workExperience.deleteWorkExperience);
  }
}
