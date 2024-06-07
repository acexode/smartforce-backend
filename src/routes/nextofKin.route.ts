import { Router } from 'express';
import { CreateNextOfKinDto, UpdateNextOfKinDto } from '@dtos/nextOfKin.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { NextOfKinController } from '@/controllers/nextofKin.controller';

export class NextOfKinRoute implements Routes {
  public path = '/next-of-kin';
  public router = Router();
  public nextOfKin = new NextOfKinController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.nextOfKin.getNextOfKin);
    this.router.get(`${this.path}/:id(\\d+)`, this.nextOfKin.getNextOfKinById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateNextOfKinDto), this.nextOfKin.createNextOfKin);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateNextOfKinDto, true), this.nextOfKin.updateNextOfKin);
    this.router.delete(`${this.path}/:id(\\d+)`, this.nextOfKin.deleteNextOfKin);
  }
}
