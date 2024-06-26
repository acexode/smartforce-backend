import { Router } from 'express';
import { EducationalHistoryController } from '@controllers/educationalHistory.controller';
import { CreateEducationalHistoryDto, UpdateEducationalHistoryDto } from '@dtos/educationalHistory.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class EducationalHistoryRoute implements Routes {
  public path = '/officer/educational-history';
  public router = Router();
  public educationalHistory = new EducationalHistoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.educationalHistory.getEducationalHistory);
    this.router.get(`${this.path}/:id(\\d+)`, this.educationalHistory.getEducationalHistoryById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateEducationalHistoryDto), this.educationalHistory.createEducationalHistory);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      ValidationMiddleware(UpdateEducationalHistoryDto, true),
      this.educationalHistory.updateEducationalHistory,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, this.educationalHistory.deleteEducationalHistory);
  }
}
