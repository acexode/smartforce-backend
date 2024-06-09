import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Rank } from '@interfaces/ranks.interface';
import { RankService } from '@services/ranks.service';

export class RankController {
  public rankService = Container.get(RankService);

  public getRanks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllRanksData: Rank[] = await this.rankService.findAllRanks();
      res.status(200).json({ data: findAllRanksData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getRankById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rankId = Number(req.params.id);
      const findOneRankData: Rank = await this.rankService.findRankById(rankId);
      res.status(200).json({ data: findOneRankData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createRank = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rankData: Rank = req.body;
      const createRankData: Rank = await this.rankService.createRank(rankData);
      res.status(201).json({ data: createRankData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateRank = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rankId = Number(req.params.id);
      const rankData: Rank = req.body;
      const updateRankData: Rank = await this.rankService.updateRank(rankId, rankData);
      res.status(200).json({ data: updateRankData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteRank = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rankId = Number(req.params.id);
      const deleteRankData: Rank = await this.rankService.deleteRank(rankId);
      res.status(200).json({ data: deleteRankData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
