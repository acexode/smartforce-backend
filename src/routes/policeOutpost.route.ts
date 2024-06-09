import { Router } from 'express';
import { PoliceOutpostController } from '@controllers/policeOutpost.controller';
import { CreatePoliceOutpostDto, UpdatePoliceOutpostDto } from '@dtos/policeOutpost.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class PoliceOutpostRoute implements Routes {
  public path = '/police-outposts';
  public router = Router();
  public policeOutpostController = new PoliceOutpostController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.policeOutpostController.getPoliceOutposts);
    this.router.get(`${this.path}/:id(\\d+)`, this.policeOutpostController.getPoliceOutpostById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreatePoliceOutpostDto), this.policeOutpostController.createPoliceOutpost);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdatePoliceOutpostDto, true), this.policeOutpostController.updatePoliceOutpost);
    this.router.delete(`${this.path}/:id(\\d+)`, this.policeOutpostController.deletePoliceOutpost);
  }
}
