import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { OfficerPromotionHistory } from '@entities/officerPromotionHistory.entity';
import { OfficerPromotionHistoryService } from '@services/officerPromotionHistory.service';

export class OfficerPromotionHistoryController {
  public officerPromotionHistoryService = Container.get(OfficerPromotionHistoryService);

  public getPromotionHistories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllPromotionHistoriesData: OfficerPromotionHistory[] = await this.officerPromotionHistoryService.findAllPromotionHistories();
      res.status(200).json({ data: findAllPromotionHistoriesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getPromotionHistoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const promotionHistoryId = Number(req.params.id);
      const findOnePromotionHistoryData: OfficerPromotionHistory = await this.officerPromotionHistoryService.findPromotionHistoryById(
        promotionHistoryId,
      );
      res.status(200).json({ data: findOnePromotionHistoryData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createPromotionHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const promotionHistoryData: OfficerPromotionHistory = req.body;
      const createPromotionHistoryData: OfficerPromotionHistory = await this.officerPromotionHistoryService.createPromotionHistory(
        promotionHistoryData,
      );
      res.status(201).json({ data: createPromotionHistoryData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updatePromotionHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const promotionHistoryId = Number(req.params.id);
      const promotionHistoryData: OfficerPromotionHistory = req.body;
      const updatePromotionHistoryData: OfficerPromotionHistory = await this.officerPromotionHistoryService.updatePromotionHistory(
        promotionHistoryId,
        promotionHistoryData,
      );
      res.status(200).json({ data: updatePromotionHistoryData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deletePromotionHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const promotionHistoryId = Number(req.params.id);
      const deletePromotionHistoryData: OfficerPromotionHistory = await this.officerPromotionHistoryService.deletePromotionHistory(
        promotionHistoryId,
      );
      res.status(200).json({ data: deletePromotionHistoryData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
