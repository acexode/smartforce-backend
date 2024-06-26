import { Router } from 'express';
import { RankController } from '@controllers/ranks.controller';
import { CreateRankDto, UpdateRankDto } from '@dtos/ranks.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class RankRoute implements Routes {
  public path = '/org-structure/ranks';
  public router = Router();
  public rankController = new RankController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.rankController.getRanks);
    this.router.get(`${this.path}/:id(\\d+)`, this.rankController.getRankById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateRankDto), this.rankController.createRank);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(UpdateRankDto, true), this.rankController.updateRank);
    this.router.delete(`${this.path}/:id(\\d+)`, this.rankController.deleteRank);
  }
}
