import { Router } from 'express';
import { OfficerPromotionHistoryController } from '@controllers/officerPromotionHistory.controller';
import { CreateOfficerPromotionHistoryDto, UpdateOfficerPromotionHistoryDto } from '@dtos/officerPromotionHistory.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class OfficerPromotionHistoryRoute implements Routes {
  public path = '/officer/officer-promotion-history';
  public router = Router();
  public officerPromotionHistoryController = new OfficerPromotionHistoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,AuthoriseRole([Roles.Admin,Roles.dataEntry]), this.officerPromotionHistoryController.getPromotionHistories);
    this.router.get(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer]), this.officerPromotionHistoryController.getPromotionHistoryById);
    this.router.post(
      `${this.path}`,
      AuthoriseRole([Roles.Admin,Roles.dataEntry]),
      ValidationMiddleware(CreateOfficerPromotionHistoryDto),
      this.officerPromotionHistoryController.createPromotionHistory,
    );
    this.router.put(
      `${this.path}/:id(\\d+)`,
      AuthoriseRole([Roles.Admin,Roles.dataEntry]),
      ValidationMiddleware(UpdateOfficerPromotionHistoryDto, true),
      this.officerPromotionHistoryController.updatePromotionHistory,
    );
    this.router.delete(`${this.path}/:id(\\d+)`,AuthoriseRole([Roles.Admin]), this.officerPromotionHistoryController.deletePromotionHistory);
  }
}
