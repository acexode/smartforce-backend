import { Router } from 'express';
import { DivisionalHeadquartersController } from '@controllers/divisionalHQ.controller';
import { CreateDivisionalHeadquartersDto, UpdateDivisionalHeadquartersDto } from '@dtos/divisionalHQ.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class DivisionalHeadquartersRoute implements Routes {
  public path = '/org-structure/divisional-headquarters';
  public router = Router();
  public divisionalHeadquartersController = new DivisionalHeadquartersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.divisionalHeadquartersController.getDivisionalHeadquarters);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.divisionalHeadquartersController.getDivisionalHeadquartersById);
    this.router.post(
      `${this.path}`,
      [AuthMiddleware,AuthoriseRole([Roles.Admin])],
      ValidationMiddleware(CreateDivisionalHeadquartersDto),
      this.divisionalHeadquartersController.createDivisionalHeadquarters,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      [AuthMiddleware,AuthoriseRole([Roles.Admin])],
      ValidationMiddleware(UpdateDivisionalHeadquartersDto, true),
      this.divisionalHeadquartersController.updateDivisionalHeadquarters,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, this.divisionalHeadquartersController.deleteDivisionalHeadquarters);
  }
}
