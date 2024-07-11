import { Router } from 'express';
import { EducationalHistoryController } from '@controllers/educationalHistory.controller';
import { CreateEducationalHistoryDto, UpdateEducationalHistoryDto } from '@dtos/educationalHistory.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class EducationalHistoryRoute implements Routes {
  public path = '/officer/educational-history';
  public router = Router();
  public educationalHistory = new EducationalHistoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, [AuthMiddleware, AuthoriseRole([Roles.Admin, Roles.dataEntry])], this.educationalHistory.getEducationalHistory);
    this.router.get(
      `${this.path}/:id(\\d+)`,
      [AuthMiddleware, AuthoriseRole([Roles.Admin, Roles.dataEntry, Roles.Officer])],
      this.educationalHistory.getEducationalHistoryById,
    );
    this.router.post(
      `${this.path}`,
      [AuthMiddleware, AuthoriseRole([Roles.Admin, Roles.dataEntry])],
      ValidationMiddleware(CreateEducationalHistoryDto),
      this.educationalHistory.createEducationalHistory,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      [AuthMiddleware, AuthoriseRole([Roles.Admin, Roles.dataEntry])],
      ValidationMiddleware(UpdateEducationalHistoryDto, true),
      this.educationalHistory.updateEducationalHistory,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, [AuthMiddleware, AuthoriseRole([Roles.Admin])], this.educationalHistory.deleteEducationalHistory);
  }
}
