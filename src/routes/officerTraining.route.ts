import { Router } from 'express';
import { OfficerTrainingController } from '@controllers/officerTraining.controller';
import { CreateOfficerTrainingDto, UpdateOfficerTrainingDto } from '@dtos/officerTraining.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class OfficerTrainingRoute implements Routes {
  public path = '/officer/officer-trainings';
  public router = Router();
  public officerTrainingController = new OfficerTrainingController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,AuthoriseRole([Roles.Admin,Roles.dataEntry]), this.officerTrainingController.getTrainings);
    this.router.get(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer]), this.officerTrainingController.getTrainingById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateOfficerTrainingDto),AuthoriseRole([Roles.Admin,Roles.dataEntry]), this.officerTrainingController.createTraining);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateOfficerTrainingDto, true),AuthoriseRole([Roles.Admin,Roles.dataEntry]), this.officerTrainingController.updateTraining);
    this.router.delete(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin]), this.officerTrainingController.deleteTraining);
  }
}
