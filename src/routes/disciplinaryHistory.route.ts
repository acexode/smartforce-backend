import { Router } from 'express';
import { DisciplinaryHistoryController } from '@controllers/disciplinaryHistory.controller';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { CreateDisciplinaryHistoryDto, UpdateDisciplinaryHistoryDto } from '@/dtos/discliplinaryHistory.dto';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class DisciplinaryHistoryRoute implements Routes {
  public path = '/officer/disciplinary-history';
  public router = Router();
  public disciplinaryHistory = new DisciplinaryHistoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])], this.disciplinaryHistory.getDisciplinaryHistory);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer])], this.disciplinaryHistory.getDisciplinaryHistoryById);
    this.router.post(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])], ValidationMiddleware(CreateDisciplinaryHistoryDto), this.disciplinaryHistory.createDisciplinaryHistory);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      AuthoriseRole([Roles.Admin,Roles.dataEntry]),
      ValidationMiddleware(UpdateDisciplinaryHistoryDto, true),
      this.disciplinaryHistory.updateDisciplinaryHistory,
    );
    this.router.delete(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.disciplinaryHistory.deleteDisciplinaryHistory);
  }
}
