import { Router } from 'express';
import { OfficerMedicalInfoController } from '@controllers/medical.controller';
import { CreateOfficerMedicalInfoDto, UpdateOfficerMedicalInfoDto } from '@dtos/medical.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class OfficerMedicalInfoRoute implements Routes {
  public path = '/officer/officer-medical';
  public router = Router();
  public OfficerMedicalInfoController = new OfficerMedicalInfoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])],  this.OfficerMedicalInfoController.getAttributes);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer])],  this.OfficerMedicalInfoController.getAttributeById);
    this.router.post(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])],  ValidationMiddleware(CreateOfficerMedicalInfoDto), this.OfficerMedicalInfoController.createAttribute);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      AuthoriseRole([Roles.Admin,Roles.dataEntry]), 
      ValidationMiddleware(UpdateOfficerMedicalInfoDto, true),
      this.OfficerMedicalInfoController.updateAttribute,
    );
    this.router.delete(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])],  this.OfficerMedicalInfoController.deleteAttribute);
  }
}
