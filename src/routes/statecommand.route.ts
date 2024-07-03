import { Router } from 'express';
import { StateCommandController } from '@controllers/statecommand.controller';
import { CreateStateCommandDto, UpdateStateCommandDto } from '@dtos/statecommand.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class StateCommandRoute implements Routes {
  public path = '/org-structure/state-commands';
  public router = Router();
  public stateCommandController = new StateCommandController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.stateCommandController.getStateCommands);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.stateCommandController.getStateCommandById);
    this.router.post(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], ValidationMiddleware(CreateStateCommandDto), this.stateCommandController.createStateCommand);
    this.router.put(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], ValidationMiddleware(UpdateStateCommandDto, true), this.stateCommandController.updateStateCommand);
    this.router.delete(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.stateCommandController.deleteStateCommand);
  }
}
