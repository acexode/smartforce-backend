import { Router } from 'express';
import { CommandController } from '@controllers/command.controller';
import { CreateCommandDto, UpdateCommandDto } from '@dtos/command.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class CommandRoute implements Routes {
  public path = '/org-structure/command';
  public fhqpath = '/org-structure/fhq-departments';
  public zonalpath = '/org-structure/zonal-commands';
  public statepath = '/org-structure/state-commands';
  public areapath = '/org-structure/area-commands';
  public divisionpath = '/org-structure/divisional-commands';
  public router = Router();
  public commandController = new CommandController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.fhqpath}`, [AuthMiddleware, AuthoriseRole([Roles.Admin])], this.commandController.getFHQDepartments);
    this.router.get(`${this.zonalpath}`, [AuthMiddleware, AuthoriseRole([Roles.Admin])], this.commandController.getZonalCommand);
    this.router.get(`${this.statepath}`, [AuthMiddleware, AuthoriseRole([Roles.Admin])], this.commandController.getStateCommands);
    this.router.get(`${this.areapath}`, [AuthMiddleware, AuthoriseRole([Roles.Admin])], this.commandController.getAreaCommands);
    this.router.get(`${this.divisionpath}`, [AuthMiddleware, AuthoriseRole([Roles.Admin])], this.commandController.getDivisionalCommands);
    this.router.get(`${this.path}`, [AuthMiddleware, AuthoriseRole([Roles.Admin])], this.commandController.getCommands);
    this.router.get(`${this.path}/:id(\\d+)`, [AuthMiddleware, AuthoriseRole([Roles.Admin, Roles.Officer])], this.commandController.getCommandById);
    this.router.post(
      `${this.path}`,
      [AuthMiddleware, AuthoriseRole([Roles.Admin])],
      ValidationMiddleware(CreateCommandDto),
      this.commandController.createCommand,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      [AuthMiddleware, AuthoriseRole([Roles.Admin])],
      ValidationMiddleware(UpdateCommandDto, true),
      this.commandController.updateCommand,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, [AuthMiddleware, AuthoriseRole([Roles.Admin])], this.commandController.deleteCommand);
  }
}
