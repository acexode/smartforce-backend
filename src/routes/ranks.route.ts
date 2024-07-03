import { Router } from 'express';
import { RankController } from '@controllers/ranks.controller';
import { CreateRankDto, UpdateRankDto } from '@dtos/ranks.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware, AuthoriseRole } from '@/middlewares/auth.middleware';
import { Roles } from '@/enums/role.enum';

export class RankRoute implements Routes {
  public path = '/org-structure/ranks';
  public router = Router();
  public rankController = new RankController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.rankController.getRanks);
    this.router.get(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.rankController.getRankById);
    this.router.post(`${this.path}`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], ValidationMiddleware(CreateRankDto), this.rankController.createRank);
    this.router.put(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], ValidationMiddleware(UpdateRankDto, true), this.rankController.updateRank);
    this.router.delete(`${this.path}/:id(\\d+)`,[AuthMiddleware,AuthoriseRole([Roles.Admin])], this.rankController.deleteRank);
  }
}
