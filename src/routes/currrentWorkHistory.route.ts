import { Router } from 'express';
import { OfficerCurrentPostingController } from '@controllers/currrentWorkHistory.controller';
import { CreateOfficerCurrentPostingDto, UpdateOfficerCurrentPostingDto } from '@dtos/currentWorkHistory.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class OfficerCurrentPostingRoute implements Routes {
  public path = '/officer/officer-current-postings';
  public router = Router();
  public officerCurrentPostingController = new OfficerCurrentPostingController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])], this.officerCurrentPostingController.getCurrentPostings);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer])], this.officerCurrentPostingController.getCurrentPostingById);
    this.router.post(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin,Roles.dataEntry])], ValidationMiddleware(CreateOfficerCurrentPostingDto), this.officerCurrentPostingController.createCurrentPosting);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      AuthoriseRole([Roles.Admin,Roles.dataEntry,Roles.Officer]),
      ValidationMiddleware(UpdateOfficerCurrentPostingDto, true),
      this.officerCurrentPostingController.updateCurrentPosting,
    );
    this.router.delete(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.officerCurrentPostingController.deleteCurrentPosting);
  }
}
