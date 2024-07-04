import { Router } from 'express';
import { CreateNextOfKinDto, UpdateNextOfKinDto } from '@dtos/nextOfKin.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { NextOfKinController } from '@/controllers/nextofKin.controller';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class NextOfKinRoute implements Routes {
  public path = '/officer/next-of-kin';
  public router = Router();
  public nextOfKin = new NextOfKinController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])],  this.nextOfKin.getNextOfKin);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer])],  this.nextOfKin.getNextOfKinById);
    this.router.post(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])],  ValidationMiddleware(CreateNextOfKinDto), this.nextOfKin.createNextOfKin);
    this.router.put(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])],  ValidationMiddleware(UpdateNextOfKinDto, true), this.nextOfKin.updateNextOfKin);
    this.router.delete(`${this.path}/:id(\\d+)`, [AuthMiddleware,AuthoriseRole([Roles.Admin])], this.nextOfKin.deleteNextOfKin);
  }
}
