import { Router } from 'express';
import { OfficerPromotionHistoryController } from '@controllers/officerPromotionHistory.controller';
import { CreateOfficerPromotionHistoryDto, UpdateOfficerPromotionHistoryDto } from '@dtos/officerPromotionHistory.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class OfficerPromotionHistoryRoute implements Routes {
  public path = '/officer-promotion-history';
  public router = Router();
  public officerPromotionHistoryController = new OfficerPromotionHistoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.officerPromotionHistoryController.getPromotionHistories);
    this.router.get(`${this.path}/:id(\\d+)`, this.officerPromotionHistoryController.getPromotionHistoryById);
    this.router.post(
      `${this.path}`,
      ValidationMiddleware(CreateOfficerPromotionHistoryDto),
      this.officerPromotionHistoryController.createPromotionHistory,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      ValidationMiddleware(UpdateOfficerPromotionHistoryDto, true),
      this.officerPromotionHistoryController.updatePromotionHistory,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, this.officerPromotionHistoryController.deletePromotionHistory);
  }
}
