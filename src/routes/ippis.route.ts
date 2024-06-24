import { Router } from 'express';
import { IppisController } from '@controllers/ippis.controller';
import { CreateIppisDto, UpdateIppisDto } from '@dtos/ippis.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class IppisRoute implements Routes {
  public path = '/ippis';
  public router = Router();
  public ippisController = new IppisController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.ippisController.getIppiss);
    this.router.get(`${this.path}/:id(\\d+)`, this.ippisController.getIppisById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateIppisDto), this.ippisController.createIppis);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateIppisDto, true), this.ippisController.updateIppis);
    this.router.delete(`${this.path}/:id(\\d+)`, this.ippisController.deleteIppis);
  }
}
