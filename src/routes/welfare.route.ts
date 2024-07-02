import { Router } from 'express';
import { OfficerWelfareInformationController } from '@controllers/welfare.controller';
import { CreateOfficerWelfareInformationDto, UpdateOfficerWelfareInformationDto } from '@dtos/welfare.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { Roles } from '@/enums/role.enum';
import { AuthoriseRole } from '@/middlewares/auth.middleware';

export class OfficerWelfareInformationRoute implements Routes {
  public path = '/officer/officer-welfare-information';
  public router = Router();
  public officerWelfareInformationController = new OfficerWelfareInformationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,AuthoriseRole([Roles.Admin,Roles.dataEntry]), this.officerWelfareInformationController.getWelfareInformation);
    this.router.get(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer]), this.officerWelfareInformationController.getWelfareInformationById);
    this.router.post(
      `${this.path}`,
      AuthoriseRole([Roles.Admin,Roles.dataEntry]),
      ValidationMiddleware(CreateOfficerWelfareInformationDto),
      this.officerWelfareInformationController.createWelfareInformation,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      AuthoriseRole([Roles.Admin,Roles.dataEntry]),
      ValidationMiddleware(UpdateOfficerWelfareInformationDto, true),
      this.officerWelfareInformationController.updateWelfareInformation,
    );
    this.router.delete(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin]), this.officerWelfareInformationController.deleteWelfareInformation);
  }
}
