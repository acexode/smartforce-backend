import { Router } from 'express';
import { StatesController } from '@controllers/state.controller';
import { Routes } from '@interfaces/routes.interface';
import { AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class StateRoute implements Routes {
  public path = '/states';
  public router = Router();
  public statesController = new StatesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, AuthoriseRole([Roles.Admin]), this.statesController.getState);
    this.router.post(`${this.path}`,AuthoriseRole([Roles.Admin]), this.statesController.createState);
  }
}
