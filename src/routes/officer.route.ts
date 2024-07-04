import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { OfficerBioDataController } from '@/controllers/officer.controller';
import { CreateOfficerBioDataDto, UpdateOfficerBioDataDto } from '@/dtos/officer.dto';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class OfficerBioDataRoute implements Routes {
  public path = '/officer/officer-bio-data';
  public router = Router();
  public OfficerBioData = new OfficerBioDataController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, [AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])],  this.OfficerBioData.getOfficerBioData);
    this.router.get(`${this.path}/:id(\\d+)`, [AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer])], this.OfficerBioData.getOfficerBioDataById);
    this.router.post(`${this.path}`, [AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])], ValidationMiddleware(CreateOfficerBioDataDto), this.OfficerBioData.createOfficerBioData);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      [AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])],
      ValidationMiddleware(UpdateOfficerBioDataDto, true),
      this.OfficerBioData.updateOfficerBioData,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, [AuthMiddleware,AuthoriseRole([Roles.Admin])], this.OfficerBioData.deleteOfficerBioData);
  }
}
