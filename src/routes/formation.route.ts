import { Router } from 'express';
import { FormationController } from '@controllers/formation.controller';
import { CreateFormationDto, UpdateFormationDto } from '@dtos/formation.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class FormationRoute implements Routes {
  public path = '/org-structure/formations';
  public router = Router();
  public formationController = new FormationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.formationController.getFormations);
    this.router.get(`${this.path}/:id(\\d+)`, this.formationController.getFormationById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateFormationDto), this.formationController.createFormation);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateFormationDto, true), this.formationController.updateFormation);
    this.router.delete(`${this.path}/:id(\\d+)`, this.formationController.deleteFormation);
  }
}
