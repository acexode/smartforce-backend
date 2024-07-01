import { Router } from 'express';
import { StateCommandController } from '@controllers/statecommand.controller';
import { CreateStateCommandDto, UpdateStateCommandDto } from '@dtos/statecommand.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class StateCommandRoute implements Routes {
  public path = '/org-structure/state-commands';
  public router = Router();
  public stateCommandController = new StateCommandController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.stateCommandController.getStateCommands);
    this.router.get(`${this.path}/:id(\\d+)`, this.stateCommandController.getStateCommandById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateStateCommandDto), this.stateCommandController.createStateCommand);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateStateCommandDto, true), this.stateCommandController.updateStateCommand);
    this.router.delete(`${this.path}/:id(\\d+)`, this.stateCommandController.deleteStateCommand);
  }
}
