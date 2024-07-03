import { Router } from 'express';
import { PoliceStationController } from '@controllers/policeStation.controller';
import { CreatePoliceStationDto, UpdatePoliceStationDto } from '@dtos/policeStation.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class PoliceStationRoute implements Routes {
  public path = '/org-structure/police-stations';
  public router = Router();
  public policeStationController = new PoliceStationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])], this.policeStationController.getPoliceStations);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer])], this.policeStationController.getPoliceStationById);
    this.router.post(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])], ValidationMiddleware(CreatePoliceStationDto), this.policeStationController.createPoliceStation);
    this.router.put(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])], ValidationMiddleware(UpdatePoliceStationDto, true), this.policeStationController.updatePoliceStation);
    this.router.delete(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.policeStationController.deletePoliceStation);
  }
}
