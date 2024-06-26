import { Router } from 'express';
import { OfficerCurrentPostingController } from '@controllers/currrentWorkHistory.controller';
import { CreateOfficerCurrentPostingDto, UpdateOfficerCurrentPostingDto } from '@dtos/currentWorkHistory.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class OfficerCurrentPostingRoute implements Routes {
  public path = '/officer/officer-current-postings';
  public router = Router();
  public officerCurrentPostingController = new OfficerCurrentPostingController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.officerCurrentPostingController.getCurrentPostings);
    this.router.get(`${this.path}/:id(\\d+)`, this.officerCurrentPostingController.getCurrentPostingById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateOfficerCurrentPostingDto), this.officerCurrentPostingController.createCurrentPosting);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      ValidationMiddleware(UpdateOfficerCurrentPostingDto, true),
      this.officerCurrentPostingController.updateCurrentPosting,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, this.officerCurrentPostingController.deleteCurrentPosting);
  }
}
