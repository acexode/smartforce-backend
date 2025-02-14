import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { DependentsController } from '@/controllers/dependent.controller';
import { CreateDependentsDto, UpdateDependentsDto } from '@/dtos/dependent.dto';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class DependentsRoute implements Routes {
  public path = '/officer/dependents';
  public router = Router();
  public dependents = new DependentsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, [AuthMiddleware, AuthoriseRole([Roles.Admin, Roles.dataEntry])], this.dependents.getDependents);
    this.router.get(
      `${this.path}/:id(\\d+)`,
      [AuthMiddleware, AuthoriseRole([Roles.Admin, Roles.dataEntry, Roles.Officer])],
      this.dependents.getDependentsById,
    );
    this.router.post(
      `${this.path}`,
      ValidationMiddleware(CreateDependentsDto),
      [AuthMiddleware, AuthoriseRole([Roles.Admin, Roles.dataEntry])],
      this.dependents.createDependents,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      ValidationMiddleware(UpdateDependentsDto, true),
      [AuthMiddleware, AuthoriseRole([Roles.Admin, Roles.dataEntry])],
      this.dependents.updateDependents,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, [AuthMiddleware, AuthoriseRole([Roles.Admin])], this.dependents.deleteDependents);
  }
}
