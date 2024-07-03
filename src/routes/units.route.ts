import { Router } from 'express';
import { UnitController } from '@controllers/units.controller';
import { CreateUnitDto, UpdateUnitDto } from '@dtos/units.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class UnitRoute implements Routes {
  public path = '/org-structure/units';
  public router = Router();
  public unitController = new UnitController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.unitController.getUnits);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.unitController.getUnitById);
    this.router.post(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], ValidationMiddleware(CreateUnitDto), this.unitController.createUnit);
    this.router.put(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], ValidationMiddleware(UpdateUnitDto, true), this.unitController.updateUnit);
    this.router.delete(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.unitController.deleteUnit);
  }
}
