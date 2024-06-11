import { Router } from 'express';
import { OfficerWelfareInformationController } from '@controllers/welfare.controller';
import { CreateOfficerWelfareInformationDto, UpdateOfficerWelfareInformationDto } from '@dtos/welfare.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class OfficerWelfareInformationRoute implements Routes {
  public path = '/officer-welfare-information';
  public router = Router();
  public officerWelfareInformationController = new OfficerWelfareInformationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.officerWelfareInformationController.getWelfareInformation);
    this.router.get(`${this.path}/:id(\\d+)`, this.officerWelfareInformationController.getWelfareInformationById);
    this.router.post(
      `${this.path}`,
      ValidationMiddleware(CreateOfficerWelfareInformationDto),
      this.officerWelfareInformationController.createWelfareInformation,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      ValidationMiddleware(UpdateOfficerWelfareInformationDto, true),
      this.officerWelfareInformationController.updateWelfareInformation,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, this.officerWelfareInformationController.deleteWelfareInformation);
  }
}
