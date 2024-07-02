import { Router } from 'express';
import { PoliceOutpostController } from '@controllers/policeOutpost.controller';
import { CreatePoliceOutpostDto, UpdatePoliceOutpostDto } from '@dtos/policeOutpost.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class PoliceOutpostRoute implements Routes {
  public path = '/org-structure/police-outposts';
  public router = Router();
  public policeOutpostController = new PoliceOutpostController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,AuthoriseRole([Roles.Admin,Roles.dataEntry]), this.policeOutpostController.getPoliceOutposts);
    this.router.get(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer]), this.policeOutpostController.getPoliceOutpostById);
    this.router.post(`${this.path}`,AuthoriseRole([Roles.Admin,Roles.dataEntry]), ValidationMiddleware(CreatePoliceOutpostDto), this.policeOutpostController.createPoliceOutpost);
    this.router.put(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin,Roles.dataEntry]), ValidationMiddleware(UpdatePoliceOutpostDto, true), this.policeOutpostController.updatePoliceOutpost);
    this.router.delete(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin]), this.policeOutpostController.deletePoliceOutpost);
  }
}
