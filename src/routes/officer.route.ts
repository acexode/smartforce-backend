import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { OfficerBioDataController } from '@/controllers/officer.controller';
import { CreateOfficerBioDataDto, UpdateOfficerBioDataDto } from '@/dtos/officer.dto';

export class OfficerBioDataRoute implements Routes {
  public path = '/officer-bio-data';
  public router = Router();
  public OfficerBioData = new OfficerBioDataController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.OfficerBioData.getOfficerBioData);
    this.router.get(`${this.path}/:id(\\d+)`, this.OfficerBioData.getOfficerBioDataById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateOfficerBioDataDto), this.OfficerBioData.createOfficerBioData);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateOfficerBioDataDto, true), this.OfficerBioData.updateOfficerBioData);
    this.router.delete(`${this.path}/:id(\\d+)`, this.OfficerBioData.deleteOfficerBioData);
  }
}
