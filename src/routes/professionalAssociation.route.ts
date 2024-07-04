import { Router } from 'express';
import { ProfessionalAssociationController } from '@controllers/professionalAssociation.controller';
import { CreateProfessionalAssociationDto, UpdateProfessionalAssociationDto } from '@dtos/professionalAssociation.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class ProfessionalAssociationRoute implements Routes {
  public path = '/officer/professional-association';
  public router = Router();
  public professionalAssociation = new ProfessionalAssociationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])], this.professionalAssociation.getProfessionalAssociation);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer])], this.professionalAssociation.getProfessionalAssociationById);
    this.router.post(
      `${this.path}`,
      AuthoriseRole([Roles.Admin,Roles.dataEntry]),
      ValidationMiddleware(CreateProfessionalAssociationDto),
      this.professionalAssociation.createProfessionalAssociation,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      AuthoriseRole([Roles.Admin,Roles.dataEntry]),
      ValidationMiddleware(UpdateProfessionalAssociationDto, true),
      this.professionalAssociation.updateProfessionalAssociation,
    );
    this.router.delete(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.professionalAssociation.deleteProfessionalAssociation);
  }
}
