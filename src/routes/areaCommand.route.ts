import { Router } from 'express';
import { AreaCommandController } from '@controllers/areaCommand.controller';
import { CreateAreaCommandDto, UpdateAreaCommandDto } from '@dtos/areaCommand.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class AreaCommandRoute implements Routes {
  public path = '/org-structure/area-commands';
  public router = Router();
  public areaCommandController = new AreaCommandController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,AuthoriseRole([Roles.Admin]), this.areaCommandController.getAreaCommands);
    this.router.get(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin]), this.areaCommandController.getAreaCommandById);
    this.router.post(`${this.path}`,AuthoriseRole([Roles.Admin]), ValidationMiddleware(CreateAreaCommandDto), this.areaCommandController.createAreaCommand);
    this.router.put(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin]), ValidationMiddleware(UpdateAreaCommandDto, true), this.areaCommandController.updateAreaCommand);
    this.router.delete(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin]), this.areaCommandController.deleteAreaCommand);
  }
}
