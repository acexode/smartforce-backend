import { Router } from 'express';
import { StatesController } from '@controllers/state.controller';
import { Routes } from '@interfaces/routes.interface';

export class StateRoute implements Routes {
  public path = '/states';
  public router = Router();
  public statesController = new StatesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.statesController.getState);
    this.router.post(`${this.path}`, this.statesController.createState);
  }
}
