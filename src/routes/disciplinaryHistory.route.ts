import { Router } from 'express';
import { DisciplinaryHistoryController } from '@controllers/disciplinaryHistory.controller';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { CreateDisciplinaryHistoryDto, UpdateDisciplinaryHistoryDto } from '@/dtos/discliplinaryHistory.dto';

export class DisciplinaryHistoryRoute implements Routes {
  public path = '/disciplinary-history';
  public router = Router();
  public disciplinaryHistory = new DisciplinaryHistoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.disciplinaryHistory.getDisciplinaryHistory);
    this.router.get(`${this.path}/:id(\\d+)`, this.disciplinaryHistory.getDisciplinaryHistoryById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateDisciplinaryHistoryDto), this.disciplinaryHistory.createDisciplinaryHistory);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      ValidationMiddleware(UpdateDisciplinaryHistoryDto, true),
      this.disciplinaryHistory.updateDisciplinaryHistory,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, this.disciplinaryHistory.deleteDisciplinaryHistory);
  }
}
