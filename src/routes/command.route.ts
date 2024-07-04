import { Router } from 'express';
import { CommandController } from '@controllers/command.controller';
import { CreateCommandDto, UpdateCommandDto } from '@dtos/command.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class CommandRoute implements Routes {
  public path = '/command';
  public router = Router();
  public commandController = new CommandController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin])],  this.commandController.getCommands);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.Officer])],  this.commandController.getCommandById);
    this.router.post(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin])],  ValidationMiddleware(CreateCommandDto), this.commandController.createCommand);
    this.router.put(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])],  ValidationMiddleware(UpdateCommandDto, true), this.commandController.updateCommand);
    this.router.delete(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.commandController.deleteCommand);
  }
}
