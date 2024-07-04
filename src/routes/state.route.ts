import { Router } from 'express';
import { StatesController } from '@controllers/state.controller';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class StateRoute implements Routes {
  public path = '/states';
  public router = Router();
  public statesController = new StatesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, [AuthMiddleware,AuthoriseRole([Roles.Admin])], this.statesController.getState);
    this.router.post(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.statesController.createState);
  }
}
