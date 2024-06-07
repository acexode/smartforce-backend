import { Router } from 'express';
import { ProfessionalAssociationController } from '@controllers/professionalAssociation.controller';
import { CreateProfessionalAssociationDto, UpdateProfessionalAssociationDto } from '@dtos/professionalAssociation.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class ProfessionalAssociationRoute implements Routes {
  public path = '/professional-association';
  public router = Router();
  public professionalAssociation = new ProfessionalAssociationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.professionalAssociation.getProfessionalAssociation);
    this.router.get(`${this.path}/:id(\\d+)`, this.professionalAssociation.getProfessionalAssociationById);
    this.router.post(
      `${this.path}`,
      ValidationMiddleware(CreateProfessionalAssociationDto),
      this.professionalAssociation.createProfessionalAssociation,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      ValidationMiddleware(UpdateProfessionalAssociationDto, true),
      this.professionalAssociation.updateProfessionalAssociation,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, this.professionalAssociation.deleteProfessionalAssociation);
  }
}
