import { Router } from 'express';
import { AreaCommandController } from '@controllers/areaCommand.controller';
import { CreateAreaCommandDto, UpdateAreaCommandDto } from '@dtos/areaCommand.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class AreaCommandRoute implements Routes {
  public path = '/area-commands';
  public router = Router();
  public areaCommandController = new AreaCommandController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.areaCommandController.getAreaCommands);
    this.router.get(`${this.path}/:id(\\d+)`, this.areaCommandController.getAreaCommandById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateAreaCommandDto), this.areaCommandController.createAreaCommand);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateAreaCommandDto, true), this.areaCommandController.updateAreaCommand);
    this.router.delete(`${this.path}/:id(\\d+)`, this.areaCommandController.deleteAreaCommand);
  }
}
