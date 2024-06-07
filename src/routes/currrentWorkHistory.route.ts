import { Router } from 'express';
import { CreateCurrentWorkHistoryDto, UpdateCurrentWorkHistoryDto } from '@dtos/currentWorkHistory.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { CurrentWorkHistoryController } from '@/controllers/currrentWorkHistory.controller';

export class CurrentWorkHistoryRoute implements Routes {
  public path = '/current-work-history';
  public router = Router();
  public currentWorkHistory = new CurrentWorkHistoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.currentWorkHistory.getCurrentWorkHistory);
    this.router.get(`${this.path}/:id(\\d+)`, this.currentWorkHistory.getCurrentWorkHistoryById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateCurrentWorkHistoryDto), this.currentWorkHistory.createCurrentWorkHistory);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      ValidationMiddleware(UpdateCurrentWorkHistoryDto, true),
      this.currentWorkHistory.updateCurrentWorkHistory,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, this.currentWorkHistory.deleteCurrentWorkHistory);
  }
}
