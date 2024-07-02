import { Router } from 'express';
import { DivisionalHeadquartersController } from '@controllers/divisionalHQ.controller';
import { CreateDivisionalHeadquartersDto, UpdateDivisionalHeadquartersDto } from '@dtos/divisionalHQ.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class DivisionalHeadquartersRoute implements Routes {
  public path = '/org-structure/divisional-headquarters';
  public router = Router();
  public divisionalHeadquartersController = new DivisionalHeadquartersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,AuthoriseRole([Roles.Admin]), this.divisionalHeadquartersController.getDivisionalHeadquarters);
    this.router.get(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin]), this.divisionalHeadquartersController.getDivisionalHeadquartersById);
    this.router.post(
      `${this.path}`,
      AuthoriseRole([Roles.Admin]),
      ValidationMiddleware(CreateDivisionalHeadquartersDto),
      this.divisionalHeadquartersController.createDivisionalHeadquarters,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      AuthoriseRole([Roles.Admin]),
      ValidationMiddleware(UpdateDivisionalHeadquartersDto, true),
      this.divisionalHeadquartersController.updateDivisionalHeadquarters,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, this.divisionalHeadquartersController.deleteDivisionalHeadquarters);
  }
}
