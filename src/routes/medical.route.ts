import { Router } from 'express';
import { OfficerMedicalInfoController } from '@controllers/medical.controller';
import { CreateOfficerMedicalInfoDto, UpdateOfficerMedicalInfoDto } from '@dtos/medical.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class OfficerMedicalInfoRoute implements Routes {
  public path = '/officer/officer-medical';
  public router = Router();
  public OfficerMedicalInfoController = new OfficerMedicalInfoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.OfficerMedicalInfoController.getAttributes);
    this.router.get(`${this.path}/:id(\\d+)`, this.OfficerMedicalInfoController.getAttributeById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateOfficerMedicalInfoDto), this.OfficerMedicalInfoController.createAttribute);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      ValidationMiddleware(UpdateOfficerMedicalInfoDto, true),
      this.OfficerMedicalInfoController.updateAttribute,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, this.OfficerMedicalInfoController.deleteAttribute);
  }
}
