import { Router } from 'express';
import { WorkExperienceController } from '@controllers/workExperience.controller';
import { CreateWorkExperienceDto, UpdateWorkExperienceDto } from '@/dtos/workexperience.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class WorkExperienceRoute implements Routes {
  public path = '/officer/work-experience';
  public router = Router();
  public workExperience = new WorkExperienceController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])], this.workExperience.getWorkExperience);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer])], this.workExperience.getWorkExperienceById);
    this.router.post(`${this.path}`, AuthoriseRole([Roles.Admin,Roles.dataEntry]),ValidationMiddleware(CreateWorkExperienceDto), this.workExperience.createWorkExperience);
    this.router.put(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])], ValidationMiddleware(UpdateWorkExperienceDto, true), this.workExperience.updateWorkExperience);
    this.router.delete(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.workExperience.deleteWorkExperience);
  }
}
