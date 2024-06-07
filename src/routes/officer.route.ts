import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { IPPISOfficersInfoController } from '@/controllers/officer.controller';
import { CreateIPPISOfficersInfoDto, UpdateIPPISOfficersInfoDto } from '@/dtos/officer.dto';

export class IPPISOfficersInfoRoute implements Routes {
  public path = '/ippis-officers-info';
  public router = Router();
  public ippisOfficersInfo = new IPPISOfficersInfoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.ippisOfficersInfo.getIPPISOfficersInfo);
    this.router.get(`${this.path}/:id(\\d+)`, this.ippisOfficersInfo.getIPPISOfficersInfoById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateIPPISOfficersInfoDto), this.ippisOfficersInfo.createIPPISOfficersInfo);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateIPPISOfficersInfoDto, true), this.ippisOfficersInfo.updateIPPISOfficersInfo);
    this.router.delete(`${this.path}/:id(\\d+)`, this.ippisOfficersInfo.deleteIPPISOfficersInfo);
  }
}
