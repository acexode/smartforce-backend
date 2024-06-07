import { Router } from 'express';
import { APERController } from '@controllers/aper.controller';
import { CreateAPERDto, UpdateAPERDto } from '@dtos/aper.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class APERRoute implements Routes {
  public path = '/aper';
  public router = Router();
  public aper = new APERController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.aper.getAPER);
    this.router.get(`${this.path}/:id(\\d+)`, this.aper.getAPERById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateAPERDto), this.aper.createAPER);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateAPERDto, true), this.aper.updateAPER);
    this.router.delete(`${this.path}/:id(\\d+)`, this.aper.deleteAPER);
  }
}
