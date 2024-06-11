import { Router } from 'express';
import { OfficerTrainingController } from '@controllers/officerTraining.controller';
import { CreateOfficerTrainingDto, UpdateOfficerTrainingDto } from '@dtos/officerTraining.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class OfficerTrainingRoute implements Routes {
  public path = '/officer-trainings';
  public router = Router();
  public officerTrainingController = new OfficerTrainingController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.officerTrainingController.getTrainings);
    this.router.get(`${this.path}/:id(\\d+)`, this.officerTrainingController.getTrainingById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateOfficerTrainingDto), this.officerTrainingController.createTraining);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateOfficerTrainingDto, true), this.officerTrainingController.updateTraining);
    this.router.delete(`${this.path}/:id(\\d+)`, this.officerTrainingController.deleteTraining);
  }
}
