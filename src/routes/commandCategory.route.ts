import { Router } from 'express';
import { CommandCategoryController } from '@controllers/commandCategory.controller';
import { CreateCommandCategoryDto, UpdateCommandCategoryDto } from '@dtos/commandCategory.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class CommandCategoryRoute implements Routes {
  public path = '/org-structure/commandCategory';
  public formationPath = '/org-structure/formations';
  public router = Router();
  public commandCategoryController = new CommandCategoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.formationPath}`, [AuthMiddleware, AuthoriseRole([Roles.Admin])], this.commandCategoryController.getAllFormation);
    this.router.get(`${this.path}`, [AuthMiddleware, AuthoriseRole([Roles.Admin])], this.commandCategoryController.getCommandCategories);
    this.router.get(
      `${this.path}/:id(\\d+)`,
      [AuthMiddleware, AuthoriseRole([Roles.Admin, Roles.Officer])],
      this.commandCategoryController.getCommandCategoryById,
    );
    this.router.post(
      `${this.path}`,
      [AuthMiddleware, AuthoriseRole([Roles.Admin])],
      ValidationMiddleware(CreateCommandCategoryDto),
      this.commandCategoryController.createCommandCategory,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      [AuthMiddleware, AuthoriseRole([Roles.Admin])],
      ValidationMiddleware(UpdateCommandCategoryDto, true),
      this.commandCategoryController.updateCommandCategory,
    );
    this.router.delete(
      `${this.path}/:id(\\d+)`,
      [AuthMiddleware, AuthoriseRole([Roles.Admin])],
      this.commandCategoryController.deleteCommandCategory,
    );
  }
}
